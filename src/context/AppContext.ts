import { SetStateAction, Dispatch, createContext } from "react";

type ContextType={
  email: string,
  accessToken:string,
  refreshToken:string,
  setEmail: Dispatch<SetStateAction<string>>,
  setAccessToken: (tokenData: string) => void,
  setRefreshToken: (tokenData: string) => void,
  logOut: () => void,
}

export const AppContext = createContext<ContextType>({
  email: "",
  accessToken: "",
  refreshToken:"",
  setEmail: ()=>{},
  setAccessToken: ()=>{},
  setRefreshToken: ()=>{},
  logOut: () => {},
});