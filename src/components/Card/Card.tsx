import { ImageSize, Superhero } from "src/types"
import styles from "./Card.module.css"

export function Card({
  superhero,
  imgSize = ImageSize.SM,
}: {
  superhero: Superhero
  imgSize?: ImageSize
}) {
  // TODO: use bigger image for desktop?
  const bgImage = superhero.images[imgSize]

  return (
    <li className={styles.card}>
      <img src={bgImage} alt={`${superhero.name} bg image`} />
      <div className={styles.cardText}>
        <h3>{superhero.name}</h3>
        <p>Height: {superhero.appearance.height?.[1] || ""}</p>
        <p>Weight: {superhero.appearance.weight?.[1] || ""}</p>
      </div>
    </li>
  )
}
