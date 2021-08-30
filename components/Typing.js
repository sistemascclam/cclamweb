import { useEffect, useState } from 'react'

export default function Typing({phrases}) {
    const [typing, settyping] = useState(true)
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [repeated, setrepeated] = useState(0)
  
    useEffect(() => {
      if (repeated < phrases.length) {
        if (typing) {
          if (index < phrases[repeated].length) {
            setTimeout(() => {
              setText(text + phrases[repeated][index])
              if (index + 1 === phrases[repeated].length) {
                settyping(false);
                setrepeated(repeated+1)
                setTimeout(() => {
                  setIndex(index + 1)
                }, 1500);
              } else {
                setIndex(index + 1)
              }
            }, 80)
          }
        } else {
          if (index > 0) {
            setTimeout(() => {
              setText(text.slice(0, index - 1))
              if (index - 1 === 0) {
                settyping(true)
              }
              setIndex(index - 1)
  
            }, 20)
          }
        }
      }
    }, [index])
    return (
        <span className="block">{text}<span className="animate-ping-fast">|</span></span>
    )
}
