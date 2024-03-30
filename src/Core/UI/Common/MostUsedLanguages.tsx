import { useEffect, useState } from "react";
import axios from "axios";
import { formatBytes } from "../../../Utils/Formatter";

interface LanguageStats {
  [key: string]: number;
}

interface Repo {
  name: string;
  html_url: string;
  languages_url:string;
}

interface UserRepo {
  username: string;
  repo: Repo;
  languages: LanguageStats;
}

const MostUsedLanguages: React.FC<{ username: string }> = ({ username }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [mostUsedLanguages, setMostUsedLanguages] = useState<{ language: string; size: string }[]>([]);

  const getUserRepos =  async (username: string): Promise<UserRepo[]> => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos: Repo[] = response.data;
      const userRepos: UserRepo[] = [];

      for (const repo of repos) {
        const languagesResponse = await axios.get(`${repo.languages_url}`);
        const languages: LanguageStats = languagesResponse.data;
        const repoData: UserRepo = {
          username: username,
          repo: {
            name: repo.name,
            html_url: repo.html_url,
            languages_url: repo.languages_url
          },
          languages: languages
        };
        userRepos.push(repoData);
      }

      return userRepos;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }

  const getMostUsedLanguages = async () => {
    try {
      setLoading(true)
      const userRepos = await getUserRepos(username);
      const languageStats: LanguageStats = {};

      for (const userRepo of userRepos) {
        for (const [language, size] of Object.entries(userRepo.languages)) {
          if (languageStats[language]) {
            languageStats[language] += size;
          } else {
            languageStats[language] = size;
          }
        }
      }

      const sortedLanguages = Object.entries(languageStats)
        .sort(([, sizeA], [, sizeB]) => sizeB - sizeA)
        .map(([language, size]) => ({ language, size: formatBytes(size) }));
      const top3Languages = sortedLanguages.slice(0, 3);

      setMostUsedLanguages(top3Languages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error', error);
    }
  };

  useEffect(() => {
    getMostUsedLanguages();
  }, [username]);

  return (
    <div>
      {loading && <div className="text-center">Yükleniyor...</div>}
      <ul className="flex justify-center">
        {mostUsedLanguages.map(({ language, size }, index) => (
          <li key={index} className="text-center p-5">
            <div className="bg-purple-500 w-[60px] h-[60px] mb-2 m-auto"></div>
            <div>
              <strong>
                {language}
              </strong>
            </div>
            <small className="text-gray-100">{size}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostUsedLanguages;