import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import getRandomRepoByLanguage from "../api/getRandomRepoByLanguage";
import { ChevronDown } from "lucide-react"
import languages from "../data/languages"
import RepoDisplay from "./RepoDisplay";
import RefreshButton from "./RefreshButton";
import RetryButton from "./RetryButton";

export default function RandomRepoGenerator() {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [selectedLanguageRepoData, setSelectedLanguageRepoData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [ButtonContent, setButtonContent] = useState<string>('');
  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const handleInputClick = () => {
    setOptionsDisplay(!optionsDisplay);
  }

  const handleLanguageSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedLanguage(e.currentTarget.innerText);
    setButtonContent(e.currentTarget.innerText);
    setIsLoading(true);
    setOptionsDisplay(!optionsDisplay);
  }

  const fetchSelectedLanguageRepo = async (language: string) => {
    const fetchedLanguageRepoData = await getRandomRepoByLanguage(language);
    if (fetchedLanguageRepoData != undefined) {
      setSelectedLanguageRepoData(fetchedLanguageRepoData);
      setIsLoading(false);
    } else {
      setError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (selectedLanguage != '') {
      fetchSelectedLanguageRepo(selectedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <div className="random-repo-generator flex flex-col space-y-4">
      <div className="language-select relative">
        <div
          onClick={handleInputClick}
          className={`language-select-input flex flex-row items-center
          justify-between py-2 px-4 w-full cursor-pointer border-2 
          ${optionsDisplay ? `rounded-t-lg` : `rounded-lg`}
          ${optionsDisplay ? `border-b-0` : `border-b-2`}`}
        >
          <p className="text-[1.1rem] select-none">
            {ButtonContent != '' ? ButtonContent : `Select a Language`}
          </p>
          <ChevronDown />
        </div>
        <AnimatePresence>
          {optionsDisplay && (
            <motion.ul
              id="languageList"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "15rem" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-[1.1rem] w-full rounded-b-lg 
              bg-(--clr-white) border-t-0 absolute border-2 
              cursor-pointer scroll overflow-y-auto top-full z-50 
              ${optionsDisplay ? `inline-block` : `hidden`}`}
            >
              {
                languages.map((language) => (
                  <li
                    onClick={handleLanguageSelect}
                    key={language.title}
                    className="cursor-pointer py-2 px-4 select-none
                hover:bg-(--clr-gray)"
                  >
                    {language.title}
                  </li>
                ))
              }
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <RepoDisplay
        repoData={selectedLanguageRepoData}
        isLoading={isLoading}
        error={error}
      />
      <RefreshButton
        onClick={() => fetchSelectedLanguageRepo(selectedLanguage)}
        className={`refresh-button text-white text-center py-2
     bg-black rounded-lg cursor-pointer ${selectedLanguageRepoData ? `inline-block` : `hidden`}`}
      />
      <RetryButton
        onClick={() => fetchSelectedLanguageRepo(selectedLanguage)}
        className={`retry-button text-white text-center py-2 bg-(--clr-red)
        rounded-lg cursor-pointer ${error ? `inline-block` : `hidden`}`}
      />
    </div>
  )
}