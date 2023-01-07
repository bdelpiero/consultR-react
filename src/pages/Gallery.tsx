import { useAppSelector } from "../store/hooks"
import { superHeroesSelector } from "../store/selectors"

// TODO: improve loading and error display
export function Gallery() {
  const { data: superHeroes, error, loading } = useAppSelector(superHeroesSelector)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>There was an error fetching super heroes data</div>
  }

  return (
    <ul>
      {superHeroes.map((hero) => (
        <li>{hero.name}</li>
      ))}
    </ul>
  )
}
