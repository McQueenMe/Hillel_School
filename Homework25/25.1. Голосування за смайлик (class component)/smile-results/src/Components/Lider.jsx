import React from 'react';

const Lider = ({ winner }) => {
   if (!winner) return null;

   return (
      <div>
         <h2>Переможець:</h2>
         <div className="emo">{winner.emoji}</div>
         <p>Кількість голосів: {winner.count}</p>
      </div>
   );
};

export default Lider;
