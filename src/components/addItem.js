import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, removeToDo,apiData } from "../Redux/Actions/index";

function To() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [api,setApi] = useState([])

   useEffect(()=>{
     fetch("http://localhost:5000/service").
     then((data)=>{
       return data.json();
     }).then((Adata)=>{
       setApi(Adata)
      })
    },[])
    dispatch(apiData(api))


  return (
    <div className="input-container">
      <input
        className="input-box-todo"
        onChange={(e) => setInputData(e.target.value)}
        placeholder="add todo list"
      />
      <button className="add-btn" onClick={() => dispatch(addToDo(inputData))}>
        +
      </button>
      {/* <button className='add-btn' onClick={() => dispatch(removeToDo())}><i class="fa-solid fa-xmark"></i></button> */}

      <div></div>
    </div>
  );
}

export default To;
