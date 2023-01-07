import { useEffect, useState } from "react"
import { wordlist } from "../wordlist"
const useWordle = () => {
  const [solution, setSolution] = useState('')
  const [turn, setTurn] = useState(0)
  const [guess, setGuess] = useState('')
  const [pastGuesses, setpastGuesses] = useState([...Array(7)])
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [usedLetters, setUsedLetters] = useState({})

  useEffect(() => {
    const random = Math.floor(Math.random() * wordlist.length)

    setSolution(wordlist[random])
  }, [gameOver])

  const processGuess = () => {
    //turn solution into array of letter strings
    let solutionArray = [...solution]
    //turn current guess into array of letter strings and loop through color conditions
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
      setGameWon(true)
      setGameOver(true)
    }
    if(turn >= 6){
      setGameOver(true)
    }
    setpastGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = processedGuess
      return newGuesses
    })
    //increment turn count
    setTurn(prevTurn => prevTurn + 1)
    //reset current guess line
    setGuess('')
    //color used letters
    setUsedLetters((prevUsedLetters) => {
      //clone previous version
      let newLetters = {...prevUsedLetters}
      //loop through latest guess
      processedGuess.forEach((l) => {
        //ex - l = {key: 'b', color: 'grey'}
        //ex - l.key = 'b'
        //newLetters['b'] = 'grey' or undefined if letter was not used
        let currentColor = newLetters[l.key]
        if(l.color === 'grey' && currentColor  !== 'yellow' && currentColor !== 'green'){
          newLetters[l.key] = 'grey'
        } 
        if(l.color === 'yellow' && currentColor !== 'green'){
          newLetters[l.key] = 'yellow'
        } 
        if(l.color === 'green'){
          newLetters[l.key] = 'green'
        }
      })
      return newLetters
    })
  }


  // function for uses keyboard
  const handleKeyPress = ({ key }) => {
    //use regex to check for letters and if the guess is less than 6
    if(/^[A-Za-z]$/.test(key) && guess.length < 6){
      setGuess(prevGuess => prevGuess + key.toLowerCase())
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

  const handleMousePress = (e) => {
    const letter = e.target.dataset.key
    if(e.target.dataset.enter){
        if(guess.length < 6){
            return
        }
        const p = processGuess()
        addGuess(p)
    }

    if(e.target.dataset.delete){
        setGuess((prev) => {
            return prev.slice(0, -1)
        })
        return
    }

    if(/^[A-Za-z]$/.test(letter)){
        if (guess.length < 6) {
            setGuess((prev) => {
                return prev + letter.toLowerCase()
            })
        }
    }
  }

  
  const restartGame = () => {
    setTurn(0)
    setGuess('')
    setpastGuesses([...Array(7)])
    setGameWon(false)
    setGameOver(false)
    setUsedLetters({})
  }


  return {solution, turn, guess, pastGuesses, gameWon, gameOver, usedLetters, handleKeyPress, handleMousePress, restartGame}
}

export default useWordle