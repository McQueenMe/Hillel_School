import React, { Component } from 'react';
import '../Components/Smile.css';

class Smile extends Component {
   constructor(props) {
      super(props);
      const savedCount = localStorage.getItem(this.props.emoji) || 0;
      this.state = {
         count: parseInt(savedCount, 10),
      };
   }

   handleClick = () => {
      this.setState((prevState) => {
         const newCount = prevState.count + 1;
         localStorage.setItem(this.props.emoji, newCount);
         return { count: newCount };
      });
   };

   render() {
      return (
         <div className="card">
            <div className="emo" onClick={this.handleClick}>
               {this.props.emoji}
            </div>
            <div className="count">{this.state.count}</div>
         </div>
      );
   }
}

export default Smile;
