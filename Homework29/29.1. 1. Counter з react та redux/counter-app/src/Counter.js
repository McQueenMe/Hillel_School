import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
   const count = useSelector(state => state.count);
   const dispatch = useDispatch();

   useEffect(() => {
      const savedCount = localStorage.getItem('count');
      if (savedCount) {
         dispatch({ type: 'SET', payload: parseInt(savedCount, 10) });
      }
   }, [dispatch]);

   useEffect(() => {
      localStorage.setItem('count', count);
   }, [count]);

   return (
      <div className="container text-center mt-5">
         <h1 className="display-4">Value: {count}</h1>
         <div className="btn-group mt-3">
            <button
               className="btn btn-success"
               onClick={() => dispatch({ type: 'INCREMENT' })}
            >
               +
            </button>
            <button
               className="btn btn-danger"
               onClick={() => dispatch({ type: 'DECREMENT' })}
            >
               -
            </button>
         </div>
      </div>
   );
};

export default Counter;
