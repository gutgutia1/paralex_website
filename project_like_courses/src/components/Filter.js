

const Filter= ({filterData,category,setCategory}) =>{
    // console.log(filterData)
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
           {
            filterData.map((obj)=>{
                return(
                    <button key={obj.id} onClick={()=>setCategory(obj.title)}className={`text-lg px-2 py-1 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === obj.title ? 
                        "bg-opacity-60 border-white" :
                        "bg-opacity-40 border-transparent"}
                    `}>
                        {obj.title}
                    </button>
                )
            })
           }
        </div>
    )
}

export  default Filter