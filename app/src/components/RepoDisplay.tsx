import { Star, GitFork, CircleAlert, Dot } from "lucide-react"

export default function RepoDisplay() {
  return (
    <div className="repo-display bg-(--clr-gray) py-4 px-4 rounded-lg">
      <div className="default-text text-center">
        <p className="text-[1.1rem] hidden">
          Please select a language
        </p>
      </div>
      <div className="repo-content space-y-4">
        <div className="repo-title">
          <h2 className="text-[1.2rem]">
            driver.js
          </h2>
        </div>
        <div className="repo-description">
          <p>
            A light-weight, no-dependency, vanilla JavaScript engine
            to drive user's focus across the page.
          </p>
        </div>
        <div className="repo-info flex justify-between">
          <div className="repo-language flex">
            <Dot />
            <p>
              JavaScript
            </p>
          </div>
          <div
            title="Stars"
            className="repo-stars text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <Star size={18} />
            <p>24,442</p>
          </div>
          <div
            title="Forks"
            className="repo-forks text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <GitFork size={18} />
            <p>1,571</p>
          </div>
          <div
            title="Issues"
            className="repo-issues text-(--clr-gray-text) 
            flex gap-1 cursor-default">
            <CircleAlert size={18} />
            <p>120</p>
          </div>
        </div>
      </div>
    </div>
  )
}