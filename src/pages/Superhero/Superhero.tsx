import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "src/store/hooks"
import { fetchSuperhero } from "src/store/superheroes"
import styles from "./Superhero.module.css"

export function Superhero() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!id) return
    dispatch(fetchSuperhero(id))
  }, [id])

  return <div className={styles.contaienr}>{id}</div>
}
