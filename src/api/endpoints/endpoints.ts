import axiosInstance from "../axios/axiosInstance";

const endpoints = {
    accessToken: (data:{
        "access_id": string
      }) => axiosInstance.post("/v1/auth/access-token", data),
    refreshToken: (data:{
        "refresh_token": "string"
      }) => axiosInstance.post("/v1/auth/refresh-token", data),
    
    login: (data:{
        "email": string,
        "password": string
      }) => axiosInstance.post("/v1/auth/login", data),
    
    passwordReset: (data:{
        "email": string,
        "redirect_url": string|null
      }) => axiosInstance.post("/v1/auth/password-reset", data),
    passwordSet: (data:{
        "token": string,
        "secret": string,
        "password": string,
        "password_confirm": string
      }) => axiosInstance.post("/v1/auth/password-set", data),
    healthcheck: () => axiosInstance.get("/healthcheck"),
};

export default endpoints;