import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { useAppSelector } from "./store/hooks"

function App() {
  const value = useAppSelector((state) => state.test.value)

  return <div className="App">{value}</div>
}

export default App
