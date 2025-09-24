type RetryButtonProps = {
  className: string,
  onClick: () => void,
}

export default function RetryButton({ className, onClick }: RetryButtonProps) {
  return (
    <button
      id="retryButton"
      type="button"
      onClick={onClick}
      className={className}
    >
      Click to retry
    </button>
  )
}