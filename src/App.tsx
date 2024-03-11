import { ThemeProvider } from "@mui/material/styles";
import "./asets/fonts/stylesheet.css";
import { customTheme } from "./threme/customTheme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <AppContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AppContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
