import RandomRepoGenerator from "./RandomRepoGenerator";

export default function MainContent() {
  return (
    <div className="flex flex-col space-y-6 w-full
    max-w-90">
      <div className="title flex items-center gap-2">
        <img
          src="/github-tile.svg"
          alt="github logo"
          className="w-full max-w-10"
        />
        <h1 className="text-xl font-[500] select-none">
          Github Repository Generator
        </h1>
      </div>
      <RandomRepoGenerator />
    </div>
  )
}