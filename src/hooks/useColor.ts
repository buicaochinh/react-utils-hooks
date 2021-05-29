import { useEffect, useState } from 'react'

const randomColor = (): string => {
  const colors: string[] = ['red', 'green', 'blue']
  let randomNumber: number = Math.floor(Math.random()*3 + Math.random()*4) % 3

  return colors[randomNumber]
}

const useColor = (): string => {
  const [color, setColor] = useState<string>('transparent')

  useEffect(() => {
    setInterval(() => {
      let newColor: string = randomColor()
      setColor(newColor)
    }, 1000)
    return () => clearInterval()
  }, [])

  return color
}

export default useColor
