import axios, { AxiosResponse } from "axios";

const useFetchApiSS = async (apiPath: string, payload?: object) => {
  const method = payload ? "POST" : "GET";

  const requestOptions = {
    url: apiPath,
    method,
    ...(payload && { data: payload }),
  };

  return await axios(requestOptions)
    .then((res: AxiosResponse) => res.data)
    .catch((err) => err.toJSON());
};

export default useFetchApiSS;
