import Types from './ActionTypes';


export const addToDo = (data) => {
  return {
    type: Types.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: Types.DELETE_TODO,
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


export const state = (data) =>{
  return {
    type  : "SET_STATE",
    payload:data,
  }
}


export const apiData = (api)=>{
   return{
    type:Types.GET_DATA,
    payload:api,
   }
}