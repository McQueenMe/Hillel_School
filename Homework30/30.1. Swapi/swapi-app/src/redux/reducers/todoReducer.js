const initialState = [];

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [...state, action.payload];
      case 'CLEAR_TODO':
         return [];
      default:
         return state;
   }
};

export default todoReducer;
