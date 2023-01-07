const Modal = ({ turn, gameWon, solution, setShowModal, restartGame }) => {

  const handleButton = () =>{
    setShowModal(false)
    restartGame()
  }

  return (
    <div className='modal'>
      <div className='modal__window'>
        <div>turns used - {turn}</div>
        {gameWon && <div>you win!</div>}
        {!gameWon && <div className='modal__text'>
          <div>the solution was {solution}</div>
          <div>better luck next time</div>
        </div>}
        <button onClick={handleButton} className='modal__button'>Play Again?</button>
      </div>
    </div>
  )
}

export default Modal