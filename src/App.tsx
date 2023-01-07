import { useEffect } from "react"
import { Header } from "components/Header/Header"
import { Gallery } from "pages/Gallery/Gallery"
import { useAppDispatch } from "store/hooks"
import { fetchAllSuperheroes } from "store/superheroes"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllSuperheroes())
  }, [])

  return (
    <>
      <Header />
      <Gallery />
    </>
  )
}

export default App
