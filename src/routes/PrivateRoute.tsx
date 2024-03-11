import { Navigate } from "react-router-dom";
import useAppContext from "../context/useAppContext";

type Props = {
  children: React.ReactElement;
};

function PrivateRoute({ children }: Props) {
  const { accessToken, refreshToken } = useAppContext();

  return accessToken && refreshToken ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
}

export default PrivateRoute;
