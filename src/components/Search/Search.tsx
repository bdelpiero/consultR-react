import styles from "./Search.module.css"

export function Search({
  onChange,
  placeholderText,
}: {
  onChange: React.ChangeEventHandler
  placeholderText: string
}) {
  return (
    <input
      className={styles.searchBar}
      type="text"
      onChange={onChange}
      placeholder={placeholderText}
    />
  )
}
