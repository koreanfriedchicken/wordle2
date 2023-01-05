import { useEffect } from "react"
import useWordle from "../hooks/useWordle"

const GameGrid = () => {

  const { handleKeyPress } = useWordle()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <div className='game-grid'>
        {[...Array(42)].map((_,i)=>{
            return <div key={i} className="game-grid__tile">{i}</div>
        })}
    </div>
  )
}

export default GameGrid
