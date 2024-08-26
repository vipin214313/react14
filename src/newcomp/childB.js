import React from 'react';

//here mahnage two propes message,setmessage
function childCompB1({message,setMessage}){
return(
    <div>
        <h2> Child Component B</h2>
        <p>{message}</p>
        <button onClick={()=>setMessage("updtaed massage from child componet B")}> update message </button>
    </div>
);
}
export default childCompB1;