import styles from "./display.module.css"

const Display=({val})=>{
    return <input className={styles.display}id="display" type="text"
    value={val} readOnly
    ></input>

}

export default Display;