import React, { useState } from "react";
// import { addToDo, deleteToDo, removeToDo } from "../Actions/index";
import {  useSelector } from "react-redux";
import "./to.css"

import To from "./addItem";
import List from "./List";
import Pagination from "./pagination";



function Todo() {
  //   const [allData,setAllData] = useState([]);
  const [inputData, setInputData] = useState("");
  console.log(inputData);
  // const dispatch = useDispatch();
  const list = useSelector((state) => state.Reducers.list);
//   const addData = () => {
//     // setAllData([...allData,inputData])
//   };

  return (

   <div className="main-container"  > 
      <div className="center-container" > 
          <To/>
          <Pagination/>
          {/* <h1>To Do</h1> */}
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
