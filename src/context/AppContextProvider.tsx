import { useCallback, useMemo, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: React.ReactElement;
};

const AppContextProvider = (props: Props) => {
  const [email, setEmail] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const logOut = useCallback(() => {
    setEmail("");
    setAccessToken("");
    setRefreshToken("");
  }, []);

  const contextValue = useMemo(
    () => ({
      email,
      accessToken,
      refreshToken,
      setEmail,
      setAccessToken,
      setRefreshToken,
      logOut,
    }),
    [email, accessToken, refreshToken, setAccessToken, setRefreshToken, logOut]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
