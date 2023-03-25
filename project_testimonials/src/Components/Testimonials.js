import React, { useState } from 'react'
import Card from './Card'

const Testimonials = ({reviews}) => {
    const[index,setIndex]=useState(0)
    const length=reviews.length
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]} setIndex={setIndex} length={length}></Card>
    </div>
  )
}

export default Testimonials