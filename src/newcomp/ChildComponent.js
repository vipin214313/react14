//The Context API is a built-in solution for sharing state across components without prop drilling. It provides a way to create and manage a global state that any component can access. This method is more scalable and easier to maintain in larger applications.
import React , {useContext} from "react";
import { AppContext } from "../App";

function ChildComponent(){
    const {message , setMessage} = useContext(AppContext); //we can also write like this: const [message,setMessage] = useContext(AppContext)
    return(
        <div>
       <h2> THis is ChildComponent : </h2>
       <p>{message}</p>
       <button onClick={()=>setMessage(" This message updated from child ")}>call message</button>
        </div>
    )
}
export default ChildComponent;