import React, { Component } from 'react';
import '../Components/Title.css'

class Title extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <>
            <div className='title'>{this.props.text}</div>
         </>
      );
   }
}

export default Title;