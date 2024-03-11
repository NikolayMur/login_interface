import Box from "@mui/material/Box";
import { ReactComponent as MainLogo } from "../asets/mainLogo.svg";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import useAppContext from "../context/useAppContext";

const Home = () => {
  const { logOut } = useAppContext();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          marginTop: 22,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainLogo />
        <Typography component="h1" variant="subtitle1" sx={{ mt: 9 }}>
          Welcome to the Home page!
        </Typography>
      </Box>
    </>
  );
};

export default Home;
