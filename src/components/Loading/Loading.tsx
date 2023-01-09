import { Loader } from "../Loader/Loader"
import styles from "./Loading.module.css"

export function Loading() {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  )
}
