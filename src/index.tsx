import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./app/theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
