import { Star, GitFork, CircleAlert } from "lucide-react"

type RepoDisplayProps = {
  repoData: any;
  isLoading: boolean,
  error: boolean,
}

export default function RepoDisplay(props: RepoDisplayProps) {
  return (
    props.repoData ? (
      <div className="repo-display bg-(--clr-gray) py-6 px-4 rounded-lg">
        <a
          href={props.repoData.html_url}
          target="about_blank"
        >
          <div className="repo-content space-y-6">
            <div className="repo-title">
              <h2 className="text-[1.2rem] hover:underline">
                {props.repoData.full_name}
              </h2>
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
        </a>
      </div>
    ) : (
      <div className={`repo-display py-6 px-4 rounded-lg 
      ${props.error ? `bg-(--clr-red-bg)` : `bg-(--clr-gray)`} `}>
        <div className="status-text text-center">
          <p className={`${(props.isLoading || props.error) ? `hidden` : `inline-block`}`}>
            Please select a language
          </p>
          <p className={`${props.isLoading ? `inline-block` : `hidden`}`}>
            Loading, please wait...
          </p>
          <p className={`${props.error ? `inline-block` : `hidden`}`}>
            Error fetching repositories
          </p>
        </div>
      </div>
    )
  )
}