import React, { useState } from 'react';
import './App.css';
import Smile from './Components/Smile';
import Title from './Components/Title';
import Lider from './Components/Lider';
import Button from './Components/Button';

const App = () => {
  const [winner, setWinner] = useState(null);

  const smiles = [
    { emoji: "😃", key: "1" },
    { emoji: "😊", key: "2" },
    { emoji: "😎", key: "3" },
    { emoji: "🤩", key: "4" },
    { emoji: "😍", key: "5" },
  ];

  return (
    <>
      <Title text="Голосування за найкращий смайлик" />
      <div className="smiles-container">
        {smiles.map(smile => <Smile key={smile.key} emoji={smile.emoji} />)}
      </div>
      <Button smiles={smiles} setWinner={setWinner} />
      <Title text="Результати голосування" />
      <Lider winner={winner} />
    </>
  );
};

export default App;
