import { ChevronDown } from "lucide-react"
import languages from "../data/languages"

export default function LanguageSelect() {
  return (
    <div className="language-select flex flex-col">
      <div className="language-select-button flex flex-row items-center
      justify-between py-2 px-4 w-full rounded-t-lg border-2 border-b-0 
      cursor-pointer">
        <p className="text-[1.1rem]">
          Select a Language
        </p>
        <ChevronDown />
      </div>
      <ul
        id="languageSelect"
        className="text-[1.1rem] w-full h-60 rounded-b-lg border-2 
        border-t-0 cursor-pointer scroll overflow-y-auto"
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