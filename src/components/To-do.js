import React, { useState } from "react";
// import { addToDo, deleteToDo, removeToDo } from "../Actions/index";
import {  useSelector } from "react-redux";
import "./to.css"

import To from "./addItem";
import List from "./List";
import Pagination from "./pagination";



function Todo() {
  const [inputData, setInputData] = useState("");
  console.log(inputData);
  const list = useSelector((state) => state.Reducers.list);


  return (

   <div className="main-container"  > 
      <div className="center-container" > 
          <To/>
          <Pagination/>
          <hr/>
          {/* {list.map((item,i)=>{
          return(
             <List key={i} list={item} />
          )
          })
          } */}
    
      </div>
   </div>

     
  )
}

export default Todo;
