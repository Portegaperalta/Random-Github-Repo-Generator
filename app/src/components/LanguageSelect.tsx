import { ChevronDown } from "lucide-react"
import languages from "../data/languages"
import { useState } from "react"

export default function LanguageSelect() {

  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const handleSelectButtonClick = () => {
    setOptionsDisplay(!optionsDisplay);
  }

  return (
    <div className={`language-select flex flex-col border-2
    rounded-lg`}>
      <div
        onClick={handleSelectButtonClick}
        className={`language-select-button flex flex-row items-center
        justify-between py-2 px-4 w-full cursor-pointer
        ${optionsDisplay ? `rounded-t-lg` : `rounded-lg`}`}>
        <p className="text-[1.1rem] select-none">
          Select a Language
        </p>
        <ChevronDown />
      </div>
      <ul
        id="languageSelect"
        className={`text-[1.1rem] w-full h-60 rounded-b-lg border-t-0
        cursor-pointer scroll overflow-y-auto ${optionsDisplay ? `inline-block` : `hidden`}
        `}
      >
        {
          languages.map((language) => (
            <li
              key={language.title}
              className="cursor-pointer py-2 px-4 hover:bg-(--clr-gray)"
            >
              {language.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}