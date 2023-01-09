import { Routes, Route, Navigate } from "react-router"
import { Header } from "src/components/Header/Header"
import { Gallery } from "src/pages/Gallery/Gallery"
import { Superhero } from "./pages/Superhero/Superhero"

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
