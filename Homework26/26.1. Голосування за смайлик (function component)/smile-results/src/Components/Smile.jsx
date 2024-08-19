import React, { useState, useEffect } from 'react';
import '../Components/Smile.css';

const Smile = ({ emoji }) => {
   const [count, setCount] = useState(parseInt(localStorage.getItem(emoji), 10) || 0);

   const handleClick = () => {
      setCount(prevCount => {
         const newCount = prevCount + 1;
         localStorage.setItem(emoji, newCount);
         return newCount;
      });
   };

   return (
      <div className="card-custom">
         <div className="emo" onClick={handleClick}>
            {emoji}
         </div>
         <div className="count">{count}</div>
      </div>
   );
};

export default Smile;
