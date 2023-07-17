import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteToDo } from "../Redux/Actions/index";
// import Pagination from "./pagination";
import  Loader from "./Loader"

function List({ itemData, }) {
  const [time, setTime] = useState(false);



  console.log("itemlist",itemData);
  const dispatch = useDispatch();
  if (itemData) {
    setTimeout(() => {
      setTime(true);
    }, 1000);
  } else {
    return null;
  }

  return (
    <>
      <li className="list-item">
       
        {time?itemData.data:<Loader/>}
        
          {time?<span
            className="icons"
            onClick={() => dispatch(deleteToDo(itemData.id))}
          >
            <i class="fa-solid fa-trash"></i>
          </span>:""}
        
      </li>
    </>
  );
}

export default List;
