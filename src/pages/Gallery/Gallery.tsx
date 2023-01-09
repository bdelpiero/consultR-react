import React, { useEffect, useState } from "react"
import useInfiniteScroll from "react-infinite-scroll-hook"
import { Link } from "react-router-dom"
import { Card } from "src/components/Card/Card"
import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loader } from "src/components/Loader/Loader"
import { ScrollToTopButton } from "src/components/ScrollToTopButton/ScrollToTopButton"
import { Search } from "src/components/Search/Search"
import { useLoadSuperheroes } from "src/hooks/useLoadSuperheroes"
import { useAppDispatch } from "src/store/hooks"
import { fetchAllSuperheroes } from "src/store/superheroes"
import styles from "./Gallery.module.css"

function LoadMore() {
  return (
    <div className={styles.loadMoreContainer}>
      <Loader />
    </div>
  )
}

// TODO: wait until all images are loaded before showing them
export function Gallery() {
  const [searchText, setSearchText] = useState("")

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllSuperheroes())
  }, [])

  const { superheroes, loading, error, hasNextPage, loadMore } =
    useLoadSuperheroes()
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  })

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  const filteredHeroes = superheroes.filter((hero) =>
    hero.name.toLocaleLowerCase().includes(searchText)
  )

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
          {filteredHeroes.map((hero) => (
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
