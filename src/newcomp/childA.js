import React from "react";
import ChildCompB1 from "./childB";

function ChildCompA1({message , setMessage}){
    return(
        <div>
            <h2> Child component A</h2>
            <p>{message}</p>
            <ChildCompB1 message={message} setMessage={setMessage}/>
        </div>
    );
}

export default ChildCompA1;