import styles from './search.module.css'

function Search(){
    return <> 
    <input className={styles.search} placeholder="Enter food item here..."
    onChange={(e)=>console.log(e.target.value)}
    ></input>

</>
}

export default Search;