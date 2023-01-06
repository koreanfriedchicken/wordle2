const Modal = ({ turn }) => {
  return (
    <div className='modal'>
      <div className='modal__window'>
        <div>turns used - {turn}</div>
        <button>Play Again?</button>
      </div>
    </div>
  )
}

export default Modal