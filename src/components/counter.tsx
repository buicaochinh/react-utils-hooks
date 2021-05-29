import React from "react"
import { useRecoilState } from "recoil"
import counter from "../atoms/counterAtom"

const CountUI = (): React.ReactNode => {
  const [count, setCount] = useRecoilState(counter)
  const incrementByOne = () => setCount(count + 1)
  return (
    <div>
      Count: { count}
      <br />
      <button onClick={incrementByOne}> Increment </button>
    </div>
  )
}

export default CountUI
