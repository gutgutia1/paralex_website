import "./App.css";
import Item from "./components/Item";
import ProductForm from "./components/ProductForm";

function App() {
  const items_list =[
    {
      title:"Nirma",
      price: 10
    },
    {
      title:"Surf excel",
      price: 20
    },
    {
      title:"Aereil",
      price: 30
    }
  ]
  return (
    <div>
      <ProductForm/>
      <Item item_list={items_list}/>
    </div>
  );
}

export default App;
