import { useState } from "react";
import "./App.css";

function App() {
  const[formData, setFormData] = useState({
    firstname:"",lastname:"",email:"",comment:"",ischecked:true,mode:"",cars:""
  })
  function clickHandler(event){ 
    // console.log(event.target.value)
    setFormData(prev=>{
      return{
        ...prev,
        [event.target.name]: event.target.name==="ischecked"?event.target.checked:event.target.value
      }
    })
    // console.log(formData)
  }
  function submitHandler(event){
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div>
      <form className="flex flex-col justify-center align-middle w-[200px] mx-auto mt-10" onSubmit={submitHandler}>
        <input className="border" name="firstname" type="text" placeholder="firstname"  onChange={clickHandler}/>
        <br></br>
        <input className="border" name="lastname" type="text" placeholder="lastname" onChange={clickHandler}/>
        <br></br>
        <input className="border" name="email" type="email" placeholder="emailid" onChange={clickHandler}/>
        <br></br>
        <textarea className="border" name="comment"type="email" placeholder="comments" onChange={clickHandler}/>
        <br></br>
        <label htmlFor="checkbox">Select if you want </label>
        <input name="ischecked"type="checkbox" id="checkbox" onChange={clickHandler} checked={formData.ischecked}/>
        <br>
        </br>
        <label htmlFor="online-mode">Online Mode</label>
        <input type="radio" name="mode" id="online-mode" onChange={clickHandler} value="Online Mode"></input>
        <br>

        </br>
        <label htmlFor="offline-mode">Offline Mode</label>
        <input type="radio" name="mode" id="offline-mode" onChange={clickHandler} value="Offline Mode"></input>
        <br>
        </br>
        <label htmlFor="cars">Choose a car:</label>

          <select name="cars" id="cars" onChange={clickHandler}>
            <option name="cars" value="volvo" onChange={clickHandler}>Volvo</option>
            <option name="cars" value="saab" onChange={clickHandler}>Saab</option>
            <option name="cars" value="mercedes" onChange={clickHandler}>Mercedes</option>
            <option name="cars" value="audi" onChange={clickHandler}>Audi</option>
          </select>
        <br></br>
        
        <button>
          Save 
        </button>
        
        


        
      </form>
    </div>
  );
}

export default App;
