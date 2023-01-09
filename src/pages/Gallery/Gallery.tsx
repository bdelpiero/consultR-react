import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Card } from "src/components/Card/Card"
import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loader } from "src/components/Loader/Loader"
import { ScrollToTopButton } from "src/components/ScrollToTopButton/ScrollToTopButton"
import { Search } from "src/components/Search/Search"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import {
  superheroesListSelector,
  superheroesSelector,
} from "src/store/selectors"
import { fetchAllSuperheroes } from "src/store/superheroes"
import styles from "./Gallery.module.css"

// TODO: add infinite scroll (requires pagination)
// TODO: wait until all images are loaded before showing them
export function Gallery() {
  const [searchText, setSearchText] = useState("")

  const { data, error, loading } = useAppSelector(superheroesSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllSuperheroes())
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  const filteredHeroes = data.superheroes.filter((hero) =>
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
          <li>
            <Link key={hero.id} to={`/superhero/${hero.id}`}>
              <Card superhero={hero} />
            </Link>
          </li>
        ))}
      </ul>
      <ScrollToTopButton />
    </div>
  )
}
