import { motion } from 'motion/react'

type RefreshButtonProps = {
  className: string,
  onClick: () => void,
}

export default function RefreshButton({ className, onClick }: RefreshButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}>
      Refresh
    </motion.button>
  )
}