const likeReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT_LIKES':
        return {
          ...state,
          totalLikes: state.totalLikes + action.payload,
        };
      default:
        return state;
    }
  };
  
  export default likeReducer;
  