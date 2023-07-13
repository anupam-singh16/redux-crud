export const addToDo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const removeToDo = () => {
  return {
    type: "REMOVE_TODO",
  };
};

export const previous = () =>{
  return {
    type  : "PREVIOUS"
  }
}

export const DELETE_TODO="DELETE_TODO"


export const next = () =>{
  return {
    type  : "NEXT"
  }
}