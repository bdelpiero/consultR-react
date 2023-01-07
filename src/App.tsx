import { useEffect } from "react"
import "./App.css"
import { Gallery } from "./pages/Gallery"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { fetchAllSuperheroes } from "./store/superHeroes"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllSuperheroes())
  }, [])

  return <Gallery />
}

export default App
