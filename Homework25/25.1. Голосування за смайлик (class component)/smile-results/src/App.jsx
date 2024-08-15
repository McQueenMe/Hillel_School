import React, { useState } from 'react';
import './App.css';
import Smile from './Components/Smile';
import Title from './Components/Title';
import Lider from './Components/Lider';
import Button from './Components/Button';

function App() {
  const [winner, setWinner] = useState(null);

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
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' }}>
        {smiles}
      </div>

      <Button smiles={smiles} setWinner={setWinner} />
      <Title text="Результати голосування" />
      <Lider winner={winner} />
    </>
  );
}

export default App;


