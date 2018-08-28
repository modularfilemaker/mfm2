import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" ? "x" : "http://localhost:4000";

export const getModules = () => {
  const opts = {
    baseURL: baseURL,
    url: "/search"
  };

  return axios(opts).then(response => {
    return response.data;
  });
};
