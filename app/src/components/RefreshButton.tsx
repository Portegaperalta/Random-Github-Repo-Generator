type RefreshButtonProps = {
  className: string,
  onClick: () => void,
}

export default function RefreshButton({ className, onClick }: RefreshButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}>
      Refresh
    </button>
  )
}