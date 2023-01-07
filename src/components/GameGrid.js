import GameGridRow from "./GameGridRow"

const GameGrid = ({ pastGuesses, guess, turn }) => {

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
