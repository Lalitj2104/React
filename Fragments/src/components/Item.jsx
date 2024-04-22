import styles from './Item.module.css'

function Item(props){
    const  funclick=(e)=>{
        console.log(e);
        console.log(`${props.fooditem} being bought`)

    }

    return <><li className="list-group-item">{props.fooditem}
    <button className={` ${styles.Btn} btn btn-info`}
    onClick={(e)=>funclick(e)}
    >BUY</button>
    </li>
    
    </>
}

export default Item;