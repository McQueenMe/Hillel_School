import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ smiles, setWinner }) => {
   const handleResults = () => {
      let maxVotes = 0;
      let winner = null;

      smiles.forEach((smile) => {
         const count = parseInt(localStorage.getItem(smile.emoji), 10) || 0;
         if (count > maxVotes) {
            maxVotes = count;
            winner = smile.emoji;
         }
      });

      setWinner({ emoji: winner, count: maxVotes });
   };

   const clearResults = () => {
      smiles.forEach((smile) => {
         localStorage.removeItem(smile.emoji);
      });
      setWinner(null);
      window.location.reload();
   };

   return (
      <div>
         <button onClick={handleResults} className="btn btn-success button-1">
            Show Results
         </button>
         <button onClick={clearResults} className="btn btn-danger button-1">
            Очистити результати
         </button>
      </div>
   );
};

export default Button;
