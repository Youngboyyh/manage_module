import React, { useState } from 'react';
import MainMenu from '@/components/mainMenu';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;
const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <MainMenu></MainMenu>

      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} >
            <Breadcrumb style={{ margin: '0 16px' ,lineHeight:'64px'}}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0px' ,minHeight: 360 ,background: colorBgContainer}}>
            <Outlet />
          {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div> */}
        </Content>
        <Footer style={{ textAlign: 'center' ,lineHeight:'48px',padding:0}}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;