import styles from "./ErrorMsg.module.css"

export function ErrorMsg({ errorMsg }: { errorMsg: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.errorMsg}>{errorMsg}</div>
    </div>
  )
}
