import { useState } from "react"

const useWordle = () => {
  const solution = 'yellow'
  const [turn, setTurn] = useState(0)
  const [guess, setGuess] = useState('')
  const [pastGuesses, setpastGuesses] = useState([...Array(7)])
  const [gameOver, setGameOver] = useState(false)

  const processGuess = () => {
    let solutionArray = [...solution]
    let processedGuess = [...guess].map(l => {
      return {key: l, color: 'grey'}
    })

    processedGuess.forEach((l,i) => {
      if(solutionArray.includes(l.key)){
        processedGuess[i].color = 'yellow'
      }
    })

    processedGuess.forEach((l,i) => {
      if(solutionArray[i] === l.key){
        processedGuess[i].color = 'green'
      }
    })

    return processedGuess
  }

  const addGuess = (processedGuess) => {
    if(solution === guess){
      setGameOver(true)
    }

    setpastGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = processedGuess
      return newGuesses
    })

    setTurn(prevTurn => prevTurn + 1)
    setGuess('')
  }


  // function for uses keyboard
  const handleKeyPress = ({ key }) => {

    //use regex to check for letters and if the guess is less than 6
    if(/^[A-Za-z]$/.test(key) && guess.length < 6){
      setGuess(prevGuess => prevGuess + key)
    }

    //remove the last letter of the guess
    if(key === 'Backspace'){
      const newGuess = guess.slice(0, -1)
      setGuess(newGuess)
    }

    //add guess
    if(key === 'Enter' && guess.length === 6){
      const p = processGuess()
      addGuess(p)
    }

  }


  return {solution, turn, guess, pastGuesses, gameOver, handleKeyPress}
}

export default useWordle