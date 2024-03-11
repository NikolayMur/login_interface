import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://auth-qa.qencode.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    //we do not receive the access_token via cookies
    // const authToken = Cookies.get("access_token");
    // if (authToken) {
    //   config.headers.authorization = `Bearer ${authToken}`;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;