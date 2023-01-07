import './App.css';
import { useEffect, useState } from 'react';

import useWordle from './hooks/useWordle';
import GameGrid from './components/GameGrid';
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';

function App() {

  const { solution, turn, guess, pastGuesses, gameWon, gameOver, usedLetters, handleKeyPress, handleMousePress, restartGame } = useWordle()
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
  }, [handleKeyPress, handleMousePress, gameOver])

  useEffect(() => {
    if(gameOver){
      setTimeout(() => setShowModal(true), 1250)
    }
  }, [gameOver, turn])


  return (
    <div className="App">
      <GameGrid pastGuesses={pastGuesses} guess={guess} turn={turn}/>
      <Keyboard usedLetters={usedLetters}/>
      {showModal && <Modal turn={turn} gameWon={gameWon} solution={solution} setShowModal={setShowModal} restartGame={restartGame} />}
    </div>
  );
}

export default App;
