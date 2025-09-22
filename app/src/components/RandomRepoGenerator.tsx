import LanguageSelect from "./LanguageSelect";
import RepoDisplay from "./RepoDisplay";

export default function RandomRepoGenerator() {
  return (
    <div className="random-repo-generator flex flex-col space-y-4">
      <LanguageSelect />
      <RepoDisplay />
    </div>
  )
}