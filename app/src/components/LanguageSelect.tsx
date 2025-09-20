import languages from "../data/languages"

export default function LanguageSelect() {
  return (
    <div className="language-select">
      <ul
        id="languageSelect"
        className="text-[1.1rem] px-4 py-2 w-full h-60 rounded-sm
        border-2 cursor-pointer scroll overflow-y-auto"
      >
        {
          languages.map((language) => (
            <li
              key={language.title}
              className="cursor-pointer"
            >
              {language.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}