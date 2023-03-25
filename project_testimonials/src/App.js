import React from "react";
import Testimonials from "./Components/Testimonials";
import data from "./data.js";
const App = () => {
  return (
  <div className="flex flex-col justify-center items-center bg-gray-200 w-[100vw] h-[100vh]">
    <h1 className="text-4xl font-bold">
      Our Testimonials
    </h1>
    <div className="bg-violet-400 h-[4px] w-[9.3%] mt-1 mx-auto"></div>
    <Testimonials reviews={data}></Testimonials>
  </div>);
};

export default App;
