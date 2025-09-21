import { ChevronDown } from "lucide-react"
import languages from "../data/languages"
import { useState } from "react"

export default function LanguageSelect() {

  const [ButtonContent, setButtonContent] = useState<string>('');
  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const handleInputClick = () => {
    setOptionsDisplay(!optionsDisplay);
  }

  const handleLanguageSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    setButtonContent(e.currentTarget.innerText);
    setOptionsDisplay(!optionsDisplay);
  }

  return (
    <div className={`language-select flex flex-col border-2
    rounded-lg`}>
      <div
        onClick={handleInputClick}
        className={`language-select-input flex flex-row items-center
        justify-between py-2 px-4 w-full cursor-pointer
        ${optionsDisplay ? `rounded-t-lg` : `rounded-lg`}`}>
        <p className="text-[1.1rem] select-none">
          {ButtonContent != '' ? ButtonContent : `Select a Language`}
        </p>
        <ChevronDown />
      </div>
      <ul
        id="languageList"
        className={`text-[1.1rem] w-full h-60 rounded-b-lg border-t-0
        cursor-pointer scroll overflow-y-auto ${optionsDisplay ? `inline-block` : `hidden`}
        `}
      >
        {
          languages.map((language) => (
            <li
              onClick={handleLanguageSelect}
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