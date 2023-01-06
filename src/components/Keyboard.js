import { useEffect } from 'react'

const Keyboard = ({ usedLetters }) => {

  const ROW1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const ROW2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const ROW3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  return (
    <div className='keyboard'>
            {
                ROW1.map((l) => {
                    const color = usedLetters[l]
                    return <button key={l} data-key={l} className={`key key__${color}`}>{l}</button>
                })
            }
            <div className='space'></div>
            {
                ROW2.map((l) => {
                    const color = usedLetters[l]
                    return <button key={l} data-key={l} className={`key key__${color}`}>{l}</button>
                })
            }
            <div className='space'></div>
            <button data-enter className='key key__large'>Enter</button>
            {
                ROW3.map((l) => {
                    const color = usedLetters[l]
                    return <button key={l} data-key={l} className={`key key__${color}`}>{l}</button>
                })
            }
            <button data-delete className='key key__large'>
                <img data-delete src='/backspace.svg' alt='image' />
            </button>
    </div>
  )
}

export default Keyboard