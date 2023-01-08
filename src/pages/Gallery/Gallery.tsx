import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loader } from "src/components/Loader/Loader"
import { useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"
import styles from "./Gallery.module.css"

// TODO: type superhero correctly
function Card({ superhero }: { superhero: any }) {
  // TODO: use bigger image for desktop?
  const bgImage = superhero.images.sm

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

// TODO: add search bar?
// TODO: add navigate back to the top?
// TODO: make sure all images are loaded:
//       https://medium.com/programming-essentials/how-to-detect-when-all-images-are-loaded-in-a-react-component-d831d0c675b2
export function Gallery() {
  const {
    data: superheroes,
    error,
    loading,
  } = useAppSelector(superheroesSelector)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  return (
    <ul className={styles.gallery}>
      {superheroes.map((hero) => (
        <Card key={hero.id} superhero={hero} />
      ))}
    </ul>
  )
}
