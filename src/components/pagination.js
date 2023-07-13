import React, { useState } from 'react';
import {  useSelector } from "react-redux";
import ListData from './List';
import { useDispatch } from "react-redux";
import { deleteToDo } from "../Actions/index";



function Pagination() {
  const dispatch = useDispatch();
  
  const list = useSelector((state) => state.Reducers.list);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [time,setTime] = useState(false)

  
   const data =list;

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const item = data.slice(firstItem, lastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    let timing = setTimeout(()=>{
      setTime(true)
    },3000)
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Pagination</h1> 
      <ul  >
      {/* <List itemData={item.data} /> */}
       {item.map((item,i) => {
        {/* <>
          <li  className='list-item'>{item.data}
          <span className="icons" onClick={() => dispatch(deleteToDo(item.id))}>
            <i class="fa-solid fa-trash"></i>
          </span>
          </li>
        </> */}
        return(

        <ListData itemData={item}/>

        )

       })}
      
      </ul>

      

      <div>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              fontWeight: currentPage === number ? 'bold' : 'normal'
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
