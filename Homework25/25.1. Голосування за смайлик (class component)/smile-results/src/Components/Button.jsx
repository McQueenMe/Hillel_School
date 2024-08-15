import React from 'react';

const Button = ({ smiles, setWinner }) => {
   const handleResults = () => {
      let maxVotes = 0;
      let winner = null;

      smiles.forEach((smile) => {
         const count = parseInt(localStorage.getItem(smile.props.emoji), 10) || 0;
         if (count > maxVotes) {
            maxVotes = count;
            winner = smile.props.emoji;
         }
      });

      setWinner({ emoji: winner, count: maxVotes });
   };

   const clearResults = () => {
      smiles.forEach((smile) => {
         localStorage.removeItem(smile.props.emoji);
      });
      setWinner(null);
      window.location.reload();
   };

   return (
      <div>
         <button onClick={handleResults} className="btn btn-success">
            Show Results
         </button>
         <button onClick={clearResults} className="btn btn-danger">
            Очистити результати
         </button>
      </div>
   );
};

export default Button;
