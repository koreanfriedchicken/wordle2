import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [guess, setGuess] = useState('')
  const [pastGuesses, setpastGuesses] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const handleKeyPress = ({ key }) => {

    //use regex to check for letters and if the guess is less than 6
    if(/^[A-Za-z]$/.test(key) && guess.length < 6){
      setGuess(prevGuess => prevGuess + key)
    }

    if(key === 'Backspace'){
      const newGuess = guess.slice(0, -1)
      setGuess(newGuess)
    }

    if(key === 'Enter' && guess.length === 6){
      const Guesses = pastGuesses.push(guess)
      setpastGuesses(Guesses)
    }


    console.log(guess)
  }


  return {handleKeyPress}
}

export default useWordle