import languages from "../data/languages"

export default function LanguageSelect() {
  return (
    <div className="language-select">
      <select
        name="laguageSelect"
        id="languageSelect"
        className="text-[1.1rem] px-4 py-2 w-full rounded-lg
        border-2"
      >
        {
          languages.map((language) => (
            <option
              key={language.title}
              value={language.value}>
              {language.title}
            </option>
          ))
        }
      </select>
    </div>
  )
}