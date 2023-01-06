import './App.css';
import { useEffect, useState } from 'react';

import useWordle from './hooks/useWordle';
import GameGrid from './components/GameGrid';
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';

function App() {

  const { solution, turn, guess, pastGuesses, gameOver, usedLetters, handleKeyPress, handleMousePress } = useWordle()
  const [showModal, setShowModal] = useState(false)

  
  useEffect(() => {
    if(!gameOver){
      window.addEventListener('keydown', handleKeyPress)
      window.addEventListener('mousedown', handleMousePress)

      return () => {
        window.removeEventListener('keydown', handleKeyPress)
        window.removeEventListener('mousedown', handleMousePress)
      }
    }

    setTimeout(() => setShowModal(true), 1500)
  }, [handleKeyPress, gameOver])


  return (
    <div className="App">
      <GameGrid pastGuesses={pastGuesses} guess={guess} turn={turn}/>
      <Keyboard usedLetters={usedLetters}/>
      {showModal && <Modal turn={turn} />}
    </div>
  );
}

export default App;
