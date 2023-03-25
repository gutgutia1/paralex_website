import Card from "./Cards"
function Tours({tours,removehandler}){
    return(
        <div className="wrapper">
            <h1 className="heading">
            Plan With Love
        </h1>
        <div className="cards">
    
            {tours.map( (tour) => {
                return <Card tour={tour} key={tour.id} removehandler={removehandler}></Card>
            })
            }
        </div>

        </div>
        
    )
}
export default Tours