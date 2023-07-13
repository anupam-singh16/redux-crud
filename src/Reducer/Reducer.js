// import setTime from "../components/setTime";

const initailData = {
  list: [],
};

const initialState = {
  time: null,
};

const Reducers = (state = initailData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
         ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((item,i) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    // case "SETTIME  ADD_TODO":
    //   const { id, data } = action.payload;
      
    //  return {

    //     ...initialState,
    //     time: action.payload,
    //     ...state,
    //     list: [
    //       ...state.list,
    //       {
    //         id: id,
    //         data: data,
    //       },
    //     ],
    //   };

    default:
      return state;
  }
};

export default Reducers;
