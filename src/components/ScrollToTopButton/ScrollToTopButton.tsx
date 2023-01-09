import { useState, useEffect } from "react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import styles from "./ScrollToTopButton.module.css"

export function ScrollToTopButton() {
  const [showGoTop, setShowGoTop] = useState(false)

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50)
  }

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton)
    return () => window.removeEventListener("scroll", handleVisibleButton)
  }, [])

  if (!showGoTop) return null

  return (
    <div className={styles.goToTop} onClick={handleScrollUp}>
      <BsFillArrowUpCircleFill color="#2196F3" size={50} />
    </div>
  )
}
