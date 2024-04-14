function Item1(){
    let todoName="Buy Milk";
    let todoDate="12/04/2023";
    return  <div class="container ">
    <div class="row kg-row">
      <div class="col-6">
        {todoName}
        </div>
      <div class="col-4">
        {todoDate}
        </div>
      <div class="col-2"><button type="button kg-button" class="btn btn-danger">Delete</button></div>
    </div>
  </div>
}

export default Item1;