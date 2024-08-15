import React, { Component } from 'react';

class Lider extends Component {
   render() {
      const { winner } = this.props;

      if (!winner) return null;

      return (
         <div>
            <h2>Переможець:</h2>
            <div className="emo">{winner.emoji}</div>
            <p>Кількість голосів: {winner.count}</p>
         </div>
      );
   }
}

export default Lider;
