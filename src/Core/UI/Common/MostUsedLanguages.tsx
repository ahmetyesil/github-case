import { useEffect, useState } from "react";
import axios from "axios";
import { formatBytes } from "../../../Utils/Formatter";
import {Col, message} from "antd";
import Loading from "@/UI/Common/Loading";
import * as React from "react";

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
  const [messageApi, contextHolder] = message.useMessage();
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
    } catch (error:any) {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
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
    } catch (error:any) {
      setLoading(false);
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  };

  useEffect(() => {
    getMostUsedLanguages();
  }, [username]);

  return (
    <div>
      {
          loading && <div className="flex justify-center">
            <Loading/>
          </div>
      }
      {!loading && mostUsedLanguages.length === 0 && <div className="flex justify-center">
         <span>Liste boş</span>
      </div>}
      {contextHolder}
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