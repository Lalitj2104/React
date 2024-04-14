function Empty({items}){
    return <>
    {items.length===0 &&<h3>Nothing there</h3>}
    </>
}

export default Empty;