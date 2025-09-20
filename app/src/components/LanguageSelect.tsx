import languages from "../data/languages"

export default function LanguageSelect() {
  return (
    <div className="language-select">
      <select name="laguageSelect" id="languageSelect">
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