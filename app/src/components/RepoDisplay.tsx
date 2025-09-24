import { Star, GitFork, CircleAlert } from "lucide-react"

type RepoDisplayProps = {
  repoData: any;
}

export default function RepoDisplay(props: RepoDisplayProps) {
  return (
    props.repoData ? (
      <div className="repo-display bg-(--clr-gray) py-6 px-4 rounded-lg">
        <div className="repo-content space-y-6">
          <div className="repo-title">
            <a
              href={props.repoData.url}
              target="about_blank"
              className="text-[1.2rem] hover:underlinea">
              {props.repoData.full_name}
            </a>
          </div>
          <div className="repo-description">
            <p>
              {props.repoData.description}
            </p>
          </div>
          <div className="repo-info flex justify-between">
            <div className="repo-language flex">
              <p>
                {props.repoData.language}
              </p>
            </div>
            <div
              title="Stars"
              className="repo-stars text-(--clr-gray-text) 
            flex gap-1 cursor-default">
              <Star size={18} />
              <p>
                {props.repoData.stargazers_count}
              </p>
            </div>
            <div
              title="Forks"
              className="repo-forks text-(--clr-gray-text) 
            flex gap-1 cursor-default">
              <GitFork size={18} />
              <p>
                {props.repoData.forks_count}
              </p>
            </div>
            <div
              title="Issues"
              className="repo-issues text-(--clr-gray-text) 
            flex gap-1 cursor-default">
              <CircleAlert size={18} />
              <p>
                {props.repoData.open_issues_count}
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="repo-display bg-(--clr-gray) py-6 px-4 rounded-lg">
        <div className="status-text text-center">
          <p className="text-[1.1rem] py-10 select-none">
            Please select a language
          </p>
        </div>
      </div>
    )
  )
}