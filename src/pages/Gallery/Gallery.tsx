import { useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"
import styles from "./Gallery.module.css"

// TODO: type superhero correctly
function Card({ superhero }: { superhero: any }) {
  // TODO: use bigger image for desktop?
  const bgImage = superhero.images.sm

  // TODO: validate that properties exist on superhero object?
  return (
    <li className={styles.card}>
      <img src={bgImage} alt={`${superhero.name} bg image`} />
      <div className={styles.cardText}>
        <h3>{superhero.name}</h3>
        <p>Height: {superhero.appearance.height[1]}</p>
        <p>Weight: {superhero.appearance.weight[1]}</p>
      </div>
    </li>
  )
}

// TODO: improve loading and error display
// TODO: add search bar?
// TODO: add navigate back to the top?
export function Gallery() {
  const { data: superheroes, error, loading } = useAppSelector(superheroesSelector)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>There was an error fetching super heroes data</div>
  }

  return (
    <ul className={styles.gallery}>
      {superheroes.map((hero) => (
        <Card key={hero.id} superhero={hero} />
      ))}
    </ul>
  )
}
