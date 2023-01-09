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

  // TODO: add support for all imageSizes
  const cardStyle = imgSize === ImageSize.SM ? styles.smCard : styles.mdCard
  const textStyle =
    imgSize === ImageSize.SM ? styles.smCardText : styles.mdCardText

  return (
    <div className={cardStyle}>
      <img src={bgImage} alt={`${superhero.name} bg image`} />
      <div className={textStyle}>
        <h3>{superhero.name}</h3>
        <p>Height: {superhero.appearance.height?.[1] || ""}</p>
        <p>Weight: {superhero.appearance.weight?.[1] || ""}</p>
      </div>
    </div>
  )
}
