import { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import GameGridRow from "./GameGridRow"

const GameGrid = () => {

  const { solution, turn, guess, pastGuesses, gameOver, handleKeyPress } = useWordle()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  useEffect(() => {
    console.log(pastGuesses, turn, gameOver)
  })

  return (
    <div className='game-grid'>
        {pastGuesses.map(() => {
          return <GameGridRow />
        })}
        {solution}
        {guess}
    </div>
  )
}

export default GameGrid
