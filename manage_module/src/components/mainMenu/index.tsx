import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import {useNavigate,useLocation} from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '/page3/page301'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const MainMenu: React.FC = () => {
    const navigateTo = useNavigate()
    //为了让页面刷新后继续停在当前路由
    const currentPath = useLocation()
    const menuClick = (e:{key:string})=>{
      navigateTo(e.key);
      //当点击非展开选项时展开选项关闭
      if (e.key.slice(1,6) !== ('page3' || 'page4')){
        setOpenKeys([''])
      }
    }
    //如果现在选中的展开选项中的页面，刷新页面时让展开选项继续展开
    const [openKeys, setOpenKeys] = useState([currentPath.pathname.slice(1,6)]);
    const handleOpenChange = (key:string[])=>{
      console.log(key)
      setOpenKeys([key[key.length-1]])
    }
    return(
        <Menu 
            theme="dark" 
            //这里的路径不能写死
            defaultSelectedKeys={[currentPath.pathname]} 
            mode="inline" items={items} 
            onClick = {(e)=>menuClick(e)}
            onOpenChange = {handleOpenChange}
            openKeys = {openKeys}
        />
    )
}

export default MainMenu;