import {useEffect, useState} from 'react'
import './NumberTicker.css'

interface Props {
  value: number
}

export default function NumberTicker({value}: Props) {
  const [digits, setDigits] = useState<string[]>(['0', '0', '0', '0'])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setDigits(value.toString().padStart(4, '0').split(''))
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="ticker">
      {digits.map((digit, i) => (
        <div key={`${i}-${digit}-${isAnimating}`} className="digit-container">
          <div 
            className={`digit ${isAnimating ? 'animate' : ''}`}
            style={{
              transform: `translateY(${-parseInt(digit) * 1.2}em)`
            }}
          >
            {[...Array(40)].map((_, index) => (
              <div key={index} className="digit-value">
                {index % 10}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
