import { useState } from "react"
import { useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"

export function useLoadSuperheroes() {
  const { data, error, loading } = useAppSelector(superheroesSelector)
  const [currentPage, setCurrentPage] = useState(0)

  const loadedSuperheroes =
    data.superheroes?.slice(0, (currentPage + 1) * 10) ?? []
  const hasNextPage = loadedSuperheroes.length !== data.superheroes?.length ?? 0
  // use setTimeout to mock request time
  const loadMore = () => setTimeout(() => setCurrentPage(currentPage + 1), 1000)

  return {
    loading,
    superheroes: loadedSuperheroes,
    hasNextPage,
    error,
    loadMore,
  }
}
