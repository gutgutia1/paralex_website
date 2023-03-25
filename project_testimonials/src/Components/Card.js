import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
const Card = ({review,setIndex,length}) => {
    function leftHandler(){
        setIndex((prev)=>prev-1<0?length-1:prev-1)
    }
    function rightHandler(){
        setIndex((prev)=>prev+1>length-1?0:prev+1)
    }
    function surpiseHandler(){
        let index_r =Math.floor(Math.random()*length)
        console.log(index_r)
        setIndex(index_r)
    }
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
         top-[-6px]  left-[10px] z-[-10]'></div>
            <img className="aspect-square rounded-full w-[140px] h-[140px] " src={review.image} alt=""></img>
            
        </div>
        
        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl capitalize'>
                {review.name}
            </p>
            <p className='text-violet-300 uppercase text-sm'>
                {review.job}
            </p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div  className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick={leftHandler}>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button onClick={rightHandler}>
                <FiChevronRight></FiChevronRight>
            </button>
        </div>
        <div className='mt-6 mx-auto'>
            <button onClick={surpiseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise me
            </button>
        </div>

    </div>
  )
}

export default Card