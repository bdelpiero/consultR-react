import { useAppSelector } from "../store/hooks"
import { superheroesSelector } from "../store/selectors"

// TODO: improve loading and error display
export function Gallery() {
  const { data: superheroes, error, loading } = useAppSelector(superheroesSelector)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>There was an error fetching super heroes data</div>
  }

  return (
    <ul>
      {superheroes.map((hero) => (
        <li>{hero.name}</li>
      ))}
    </ul>
  )
}
