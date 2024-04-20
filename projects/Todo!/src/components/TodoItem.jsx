function TodoItem({date,name}){
    return  <div className="container ">
    <div className="row kg-row">
      <div className="col-6">
        {name}
        </div>
      <div className="col-4">
        {date}
        </div>
      <div className="col-2"><button type="button kg-button" className="btn btn-danger">Delete</button></div>
    </div>
  </div>
}



export default TodoItem;
