const GameGridRow = ({ pastGuess, guess }) => {

  if(guess){
    let letters = guess.split('')

    return (
      <div className='game-grid__row current'>
        {letters.map((l, i) => (
          <div key={i} className='game-grid__tile typed'>{l}</div>
        ))}
        {[...Array(6 - letters.length)].map((_, i) => (
          <div key={i} className='game-grid__tile'></div>
        ))}
      </div>
    )
  }

  if(pastGuess) {
    return(
      <div className='game-grid__row'>
        {pastGuess.map((l, i) => (
          <div key={i} className={`${l.color} game-grid__tile`}>{l.key}</div>
        ))}
      </div>
    )
  }

  return (
    <div className='game-grid__row'>
      {[...Array(6)].map((l, i) => (
        <div key={i} className='game-grid__tile'></div>
      ))}
    </div>
  )
}

export default GameGridRow