import React, { useRef, useState } from "react"
import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loader } from "src/components/Loader/Loader"
import { ScrollToTopButton } from "src/components/ScrollToTopButton/ScrollToTopButton"
import { Search } from "src/components/Search/Search"
import { useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"
import { Superhero } from "src/types"
import styles from "./Gallery.module.css"

function Card({ superhero }: { superhero: Superhero }) {
  // TODO: use bigger image for desktop?
  const bgImage = superhero.images.sm

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

// TODO: add infinite scroll
// TODO: wait until all images are loaded before showing them
export function Gallery() {
  const {
    data: superheroes,
    error,
    loading: loading,
  } = useAppSelector(superheroesSelector)

  const [searchText, setSearchText] = useState("")

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  const filteredHeroes = superheroes.filter((hero) =>
    hero.name.toLocaleLowerCase().includes(searchText)
  )

  return (
    <div className={styles.container}>
      <Search
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value.toLocaleLowerCase())
        }}
        placeholderText={"Search superhero by name"}
      />
      <ul className={styles.gallery}>
        {filteredHeroes.map((hero) => (
          <Card key={hero.id} superhero={hero} />
        ))}
      </ul>
      <ScrollToTopButton />
    </div>
  )
}
