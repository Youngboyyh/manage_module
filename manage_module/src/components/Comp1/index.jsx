// import "./comp1.scss"不能这么写这时全局引入会污染全局相同名字的标签
//模块化引入
import styles from "./comp1.module.scss"
function Comp(){
    return (
        <div className={styles.box}>
            <p>this is comp1</p>
        </div>
    )
}

export default Comp;