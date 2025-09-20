export default function RepoGenerator() {
  return (
    <div className="repo-generator">
      <div className="repo-generator-title flex items-center gap-2">
        <img
          src="/github-tile.svg"
          alt="github logo"
          className="w-full max-w-10"
        />
        <h1 className="text-xl font-[500]">GitHub Repository Finder</h1>
      </div>
    </div>
  )
}