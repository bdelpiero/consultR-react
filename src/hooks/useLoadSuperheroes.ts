import { useState } from "react"
import { Superhero } from "src/types"

export function useLoadSuperheroes(superheroes: Superhero[]) {
  const [currentPage, setCurrentPage] = useState(0)

  const loadedSuperheroes = superheroes.slice(0, (currentPage + 1) * 10) ?? []
  const hasNextPage = loadedSuperheroes.length !== superheroes.length ?? 0
  // use setTimeout to mock request time
  const loadMore = () => setTimeout(() => setCurrentPage(currentPage + 1), 1000)

  return {
    loadedSuperheroes,
    hasNextPage,
    loadMore,
  }
}
