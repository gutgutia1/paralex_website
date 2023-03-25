// import Item from "./Item"
import {useState} from 'react'


function  Productitem(props){
    // console.log(props.item)
    const[title, settitle]= useState(props.item.title)


    function clickhandler(){
        settitle("maggie")
    }

    return (
        <div className="flex bg-yellow-200 m-1 justify-evenly align-middle">
             <div className="font-bold">
             {title}
             </div>
             <div className="font-bold">
             {props.item.price}
             </div>
             <button className="bg-slate-300 p-1" onClick={clickhandler}>
                Add to Cart    
             </button>
             
        </div>
    )
}

export default Productitem