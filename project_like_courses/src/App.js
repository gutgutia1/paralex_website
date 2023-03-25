import React from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import {filterData,apiUrl} from "./data"
import {useEffect,useState} from "react"
const App = () => {
  const [loading,setLoading]=useState(true)
  const [courses,setCourses]=useState(null)
  const [category,setCategory]=useState(filterData[0].title)
  async function getdata(){
    setLoading(true)
    try{
      let response = await fetch(apiUrl)
      let data = await response.json()
      // console.log(data.data)
      // return data.data
      setCourses(data.data)
      
    }
    catch{
      console.log("some error ")
    }
    setLoading(false)
    
  }
  useEffect(()=>{
    getdata()
  },[])
  return (<div className="min-h-screen flex flex-col bg-bgDark2">
    <Navbar></Navbar>
    <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
    <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
    {
      loading ?  <Spinner></Spinner>:<Cards courses={courses} category={category}></Cards>    
      
    }
    </div>
    
  </div>);
};

export default App;
