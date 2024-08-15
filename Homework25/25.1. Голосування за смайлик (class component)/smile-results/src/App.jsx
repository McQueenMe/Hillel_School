import React, { Component } from 'react';
import './App.css';
import Smile from './Components/Smile';
import Title from './Components/Title';
import Lider from './Components/Lider';
import Button from './Components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
    };
  }

  setWinner = (winner) => {
    this.setState({ winner });
  };

  render() {
    const smiles = [
      <Smile emoji="😃" key="1" />,
      <Smile emoji="😊" key="2" />,
      <Smile emoji="😎" key="3" />,
      <Smile emoji="🤩" key="4" />,
      <Smile emoji="😍" key="5" />,
    ];

    return (
      <>
        <Title text="Голосування за найкращий смайлик" />
        <div className="smiles-container">{smiles}</div>
        <Button smiles={smiles} setWinner={this.setWinner} />
        <Title text="Результати голосування" />
        <Lider winner={this.state.winner} />
      </>
    );
  }
}

export default App;
