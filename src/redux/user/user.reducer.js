const INITIAL_STATE = {
    currentUser: null
}

// 讓INITIAL_STATE作為state的預設值
  const userReducer = (state = INITIAL_STATE, action) => {
    // check which type of actions be triggered
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;