import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../Actions/index";
// import Pagination from "./pagination";
import  Loader from "./Loader"

function List({ itemData, listData }) {
  const [time, setTime] = useState(false);

  // console.log(time);
  const dispatch = useDispatch();
  if (itemData) {
    setTimeout(() => {
      setTime(true);
    }, 2000);
  } else {
    return null;
  }

  return (
    <>
      <li className="list-item">
       
        {time ? itemData.data :<Loader/>}
        {time ? (
          <span
            className="icons"
            onClick={() => dispatch(deleteToDo(itemData.id))}
          >
            <i class="fa-solid fa-trash"></i>
          </span>
        ) : (
          ""
        )}
      </li>
    </>
  );
}

export default List;
