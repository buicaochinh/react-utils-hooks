import React from "react"
import useColor from "../hooks/useColor"

const MagicBox = (): React.ReactNode => {
  let color: string = useColor()

  return <div className='box' style={{ backgroundColor: color }}>Hello</div>
}

export default MagicBox
