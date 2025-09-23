import { Star, GitFork, CircleAlert } from "lucide-react"

export default function RepoDisplay() {
  return (
    <div className="repo-display bg-(--clr-gray) py-6 px-4 rounded-lg">
      <div className="status-text text-center">
        <p className="text-[1.1rem] py-10 select-none">
          Please select a language
        </p>
      </div>
      <div className="repo-content space-y-6 hidden">
        <div className="repo-title">
          <h2 className="text-[1.2rem]">

          </h2>
        </div>
        <div className="repo-description">
          <p>

          </p>
        </div>
        <div className="repo-info flex justify-between">
          <div className="repo-language flex">
            <p>

            </p>
          </div>
          <div
            title="Stars"
            className="repo-stars text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <Star size={18} />
            <p></p>
          </div>
          <div
            title="Forks"
            className="repo-forks text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <GitFork size={18} />
            <p></p>
          </div>
          <div
            title="Issues"
            className="repo-issues text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <CircleAlert size={18} />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}