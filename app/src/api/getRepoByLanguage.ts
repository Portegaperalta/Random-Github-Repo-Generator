import axios from "axios"

export default async function getRepoByLanguage(language: string) {
  const baseUrl = `https://api.github.com/search/repositories?q=${language}+language:${language}`;

  try {
    const response = await axios.get(baseUrl, { headers: { Accept: " application/vnd.github+json" } });
    const matchingRepositories = response.data.items;

    if (matchingRepositories) {
      console.log(matchingRepositories);
      return matchingRepositories;
    } else {
      console.error("Error fetching data, try again");
    }
  }
  catch (error) {
    console.error(`Error fetching gihub data: ${error}`);
  }
}