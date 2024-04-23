import styles from './search.module.css'

const Search=({handleOnKey})=>{
    return <> 
    <input className={styles.search} placeholder="Enter food item here..."
    onKeyDown={handleOnKey}
    ></input>

</>
}

export default Search;