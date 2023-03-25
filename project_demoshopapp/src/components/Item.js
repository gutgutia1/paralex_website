import Productitem from "./Productitem";
function Item(props){
    let item_list=props.item_list
    return(
        <div className="flex flex-col mx-auto mt-[1rem] w-[96%] bg-violet-500 rounded-md p-[0.5rem]">
            <Productitem item={item_list[0]}/>
            <Productitem item={item_list[1]}/>
            <Productitem item={item_list[2]}/>
        </div>
    )
}

export default Item;