import { motion } from "motion/react"

type RetryButtonProps = {
  className: string,
  onClick: () => void,
}

export default function RetryButton({ className, onClick }: RetryButtonProps) {
  return (
    <motion.button
      id="retryButton"
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      Click to retry
    </motion.button>
  )
}