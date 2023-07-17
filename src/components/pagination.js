import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListData from "./List";
import { Loader } from "rsuite";
import Loader1 from "./Loader"
// import { timeout } from "q";
// import { useDispatch } from "react-redux";
// import { deleteToDo } from "../Actions/index";

function Pagination() {
  // const dispatch = useDispatch();

  // const list = useSelector((state) => state.ApiReducer);
  const list = useSelector((state) => state.Reducers.list);

  console.log("array ",list);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [time,setTime] = useState(false)
  // const [next,setNext] = useState(null)
  // const [time,setTime] = useState(false)

// const nextPage =(number)=>{
//   setNext(number)
// }

    const data = list;
    // data.concat(list1)

  console.log("pagination data",data);

 useEffect(()=>{
  const timeOut = setTimeout(()=>{
    console.log("debouncihf",data);
  },1000)
  return () =>  clearTimeout(timeOut)
  
 },[list])

useEffect(()=>{
  
  setTimeout(()=>{
    setTime(true)
 },3000)
},[])
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const item = data.slice(firstItem, lastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // let timing = setTimeout(()=>{
    //   setTime(true)
    // },3000)
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  

  return (
    <div className="pagination-con">
      {/* <h1>Pagination</h1>  */}
      {time?<ul>
        {/* <List itemData={item.data} /> */}
        {item.map((item, i) => {
       
          return <ListData key={i} itemData={item}  time={setTime} />
        })}
      </ul>:<Loader1/>}

      <div>
        {pageNumbers.map((number) => (
          <>
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              fontWeight: currentPage === number ? "bold" : "normal",
            }}
          >
          {/* Prev */}
            {number}
          </button>
           {/* {number} */}
         </>
        ))}
        
      </div>
      {/* <button>previous</button>  */}
      {/* {currentPage} */}
         {/* <button>next</button>  */}
    </div>
  );
}

export default Pagination;
