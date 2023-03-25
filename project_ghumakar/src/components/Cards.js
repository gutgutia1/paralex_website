import { useState } from "react"

function Card(props){
    let tour=props.tour
    let removehandler= props.removehandler
    const [readmore,setReadMore] = useState(false)
    let desc=""
    if (readmore === false){
        desc =`${tour.info.substring(0,200)}...`

        
    }
    else{
        desc=tour.info  
    }
    function readmorehandler(){
        readmore?setReadMore(false):setReadMore(true)
    }
    // console.log(tour.info)
    return(
        <div className="card">

            <img src={tour.image} alt=""></img>
            <p className="para">
                <div>₹ {tour.price}</div>
                <div>
                {tour.name}
                </div>
                
            </p>
            <div>
                {desc}
                <span onClick={readmorehandler}> 
                        {readmore ? `Show Less`: `Read More`}
                </span>
            </div>
            <button className="btn-red" onClick={()=>removehandler(tour.id)} >
                Not interested
            </button>

        </div>
    )
}

export default Card