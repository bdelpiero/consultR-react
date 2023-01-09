import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { fetchAllSuperheroes } from "src/store/superheroes"
import { Header } from "src/components/Header/Header"
import { Gallery } from "src/pages/Gallery/Gallery"
import { Superhero } from "./pages/Superhero/Superhero"
import { ErrorMsg } from "./components/ErrorMsg/ErrorMsg"
import { Loader } from "./components/Loader/Loader"
import { superheroesSelector } from "./store/selectors"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/superhero/:id" element={<Superhero />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
