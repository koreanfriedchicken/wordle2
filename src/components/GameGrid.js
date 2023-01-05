import { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import GameGridRow from "./GameGridRow"

const GameGrid = () => {

  const { solution, turn, guess, pastGuesses, gameOver, handleKeyPress } = useWordle()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <div className='game-grid'>
        {pastGuesses.map((pastGuess, i) => {
          if(turn === i) {
            return <GameGridRow key={i} guess={guess} />
          } else 
            return <GameGridRow key={i} pastGuess={pastGuess}/>
        })}
    </div>
  )
}

export default GameGrid
