const initialState = {
   data: null,
   error: null,
};

const swapiReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_DATA':
         return {
            ...state,
            data: action.payload,
            error: null,
         };
      case 'SET_ERROR':
         return {
            ...state,
            error: action.payload,
            data: null,
         };
      case 'CLEAR_DATA':
         return {
            ...state,
            data: null,
            error: null,
         };
      default:
         return state;
   }
};

export default swapiReducer;
