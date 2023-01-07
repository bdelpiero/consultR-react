import { useEffect } from "react"
import { Header } from "src/components/Header/Header"
import { Gallery } from "src/pages/Gallery/Gallery"
import { useAppDispatch } from "src/store/hooks"
import { fetchAllSuperheroes } from "src/store/superheroes"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()

  // TODO: check if the api supports pagination
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
