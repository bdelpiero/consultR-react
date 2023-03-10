import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card } from "src/components/Card/Card"
import { ErrorMsg } from "src/components/ErrorMsg/ErrorMsg"
import { Loading } from "src/components/Loading/Loading"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { superheroesSelector } from "src/store/selectors"
import { fetchSuperhero } from "src/store/superheroes"
import { ImageSize } from "src/types"
import styles from "./Superhero.module.css"

// WIP. Should display more infomation about the hero
// TODO: move dupplicated code with Galery (loading and error) to another component
export function Superhero() {
  const { id } = useParams()
  const { data, error, loading } = useAppSelector(superheroesSelector)
  const dispatch = useAppDispatch()

  // i'm re-fetching the data for the hero id just to mock a real case scenario
  // in this app, this isn't necessary,
  // we could simply fetch all the superheroes once in App.tsx and filter based on the id
  useEffect(() => {
    if (!id) return
    dispatch(fetchSuperhero(id))
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMsg errorMsg={"There was an error fetching superheroes"} />
  }

  return (
    <div className={styles.container}>
      {data.selectedHero && (
        <Card superhero={data.selectedHero} imgSize={ImageSize.MD} />
      )}
    </div>
  )
}
