import React from  'react';

function Items(){
const Fruits = [
    {name : "Apple"},
    {name : "Banana"},
    {name:"Orange"},
    {name:"Mango"}
];

const Movies =[
    {id:1 ,name :"The Seven Samurai"},
    {id:2, name :"Inception"},
    {id:3, name :"Interstellar"},
    {id:4,name:"Memento"}
];

return(
    <div>
        {Fruits.map(data =>(<p>{data.name}</p>))}
        <ol>
            {Movies.map(data=>(<li key={data.id}>{data.name}</li>))}
        </ol>
    </div>
    
);
}
export default Items;