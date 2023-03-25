import Card from "./Card"

function Cards({courses,category}){
    
    function getCourses(){
        if (category === "All"){
            let allCourses =[]
            Object.values(courses).forEach((array)=>{
                array.forEach((course)=>{
                    allCourses.push(course)
                })
        })
        console.log(allCourses)
        return allCourses
    }
    else{
        return courses[category]
    }
        
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course)=>{
                return(
                    <Card key={course.id} course={course}></Card>
                )
            })}
        </div>
    )
}

export default Cards

