import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Utils/Themes";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
