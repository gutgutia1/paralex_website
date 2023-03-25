import { useState } from "react"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify"

function Card({course}) {
    const [likedCards,setLikedCards]=useState([])
    function clickHandler(id){
        if (likedCards.includes(id)){
            let lc=likedCards.filter((cid)=>cid!==id)
            setLikedCards(lc)
            toast.warning("Like removed")
        }
        else{
            if(likedCards.length === 0){
                setLikedCards([id])
            }
            else{
                let lc=likedCards
                lc.push(id)
                setLikedCards(lc)
                
            }
            toast.success("Like Clicked")
        }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
            <img src={course.image.url} alt={course.image.alt}>
            </img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center cursor-pointer">
                {
                    likedCards.includes(course.id)?(<FcLike fontSize="1.75rem" onClick={()=>clickHandler(course.id)}/>):(<FcLikePlaceholder fontSize="1.75rem" onClick={()=>clickHandler(course.id)}/>)
                }
            </div>

        </div>
        <div className='p-4'>
            <p className="text-black font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-black'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
        </div>
        
    )

}

export default Card