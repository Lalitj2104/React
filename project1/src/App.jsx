import {Kgbutton} from "./kgbutton";
import Hello from "./hello";

function App(){

  let myName ='coder';
  let fullName=()=>{
    return "how r u";
  }
  return <div>
    <h1>
      This is the react code . I am a {myName}.{fullName()}
    </h1>

    <Kgbutton></Kgbutton>
    <Hello></Hello>
  </div>

}
export default App;