import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css"
const Todoitems=({todoitems})=>{
    return <>
        <div className={styles.itemContainer}>
        {todoitems.map(item=> <TodoItem date={item.date}
         name={item.name}></TodoItem>)}   
  </div>
    </>
}

export default Todoitems;