import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends Component {
   handleResults = () => {
      let maxVotes = 0;
      let winner = null;

      this.props.smiles.forEach((smile) => {
         const count = parseInt(localStorage.getItem(smile.props.emoji), 10) || 0;
         if (count > maxVotes) {
            maxVotes = count;
            winner = smile.props.emoji;
         }
      });

      this.props.setWinner({ emoji: winner, count: maxVotes });
   };

   clearResults = () => {
      this.props.smiles.forEach((smile) => {
         localStorage.removeItem(smile.props.emoji);
      });
      this.props.setWinner(null);
      window.location.reload();
   };

   render() {
      return (
         <div>
            <button onClick={this.handleResults} className="btn btn-success button-1">
               Show Results
            </button>
            <button onClick={this.clearResults} className="btn btn-danger button-1">
               Очистити результати
            </button>
         </div>
      );
   }
}

export default Button;
