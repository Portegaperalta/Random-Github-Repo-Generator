import { ChevronDown } from "lucide-react"
import languages from "../data/languages"
import { useEffect, useState } from "react"
import RepoDisplay from "./RepoDisplay";

export default function RandomRepoGenerator() {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [ButtonContent, setButtonContent] = useState<string>('');
  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const handleInputClick = () => {
    setOptionsDisplay(!optionsDisplay);
  }

  const handleLanguageSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedLanguage(e.currentTarget.innerText);
    setButtonContent(e.currentTarget.innerText);
    setOptionsDisplay(!optionsDisplay);
  }

  return (
    <div className="random-repo-generator flex flex-col space-y-4">
      <div className={`language-select relative`}>
        <div
          onClick={handleInputClick}
          className={`language-select-input flex flex-row items-center
        justify-between py-2 px-4 w-full cursor-pointer border-2 
        ${optionsDisplay ? `rounded-t-lg` : `rounded-lg`}
        ${optionsDisplay ? `border-b-0` : `border-b-2`}
        `}>
          <p className="text-[1.1rem] select-none">
            {ButtonContent != '' ? ButtonContent : `Select a Language`}
          </p>
          <ChevronDown />
        </div>
        <ul
          id="languageList"
          className={`text-[1.1rem] w-full h-60 rounded-b-lg 
        bg-(--clr-white) border-t-0 absolute border-2 
        cursor-pointer scroll overflow-y-auto top-full z-50 
        ${optionsDisplay ? `inline-block` : `hidden`}
        `}
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
        </ul>
      </div>
      <RepoDisplay />
    </div>
  )
}