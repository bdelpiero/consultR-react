import React, { useEffect, useState } from "react"
import useInfiniteScroll from "react-infinite-scroll-hook"
import { Link } from "react-router-dom"
import { Card } from "src/components/Card/Card"
import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loader } from "src/components/Loader/Loader"
import { Loading } from "src/components/Loading/Loading"
import { ScrollToTopButton } from "src/components/ScrollToTopButton/ScrollToTopButton"
import { Search } from "src/components/Search/Search"
import { useLoadSuperheroes } from "src/hooks/useLoadSuperheroes"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"
import { fetchAllSuperheroes } from "src/store/superheroes"
import styles from "./Gallery.module.css"

function LoadMore() {
  return (
    <div className={styles.loadMoreContainer}>
      <Loader />
    </div>
  )
}

// TODO: add animations to images
// TODO: split into cleaner components
export function Gallery() {
  const [searchText, setSearchText] = useState("")

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllSuperheroes())
  }, [])

  const { data, loading, error } = useAppSelector(superheroesSelector)

  const filteredHeroes = data.superheroes.filter((hero) => {
    return hero.name.toLocaleLowerCase().includes(searchText)
  })

  const { loadedSuperheroes, hasNextPage, loadMore } =
    useLoadSuperheroes(filteredHeroes)
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  return (
    <>
      <div className={styles.container}>
        <Search
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value.toLocaleLowerCase())
          }}
          placeholderText={"Search superhero by name"}
        />
        <ul className={styles.gallery}>
          {loadedSuperheroes.map((hero) => (
            <li key={hero.id}>
              <Link to={`/superhero/${hero.id}`}>
                <Card superhero={hero} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ScrollToTopButton />
      {(hasNextPage || loading) && (
        <div ref={sentryRef}>
          <LoadMore />
        </div>
      )}
    </>
  )
}
