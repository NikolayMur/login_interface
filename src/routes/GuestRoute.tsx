import { Navigate } from "react-router-dom";
import useAppContext from "../context/useAppContext";

type Props = {
  children: React.ReactElement;
};

function GuestRoute({ children }: Props) {
  const { accessToken, refreshToken } = useAppContext();

  return accessToken && refreshToken ? <Navigate to={"/"} /> : children;
}

export default GuestRoute;
