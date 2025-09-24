type RefreshButtonProps = {
  className: string,
  onClick: () => void,
}

export default function RefreshButton() {
  return (
    <button className="refresh-button text-white text-center py-2
     bg-black rounded-lg cursor-pointer">
      Refresh
    </button>
  )
}