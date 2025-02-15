import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./shared/styles/lib/reset.css";
import "./shared/styles/lib/normalize.css";

import { ThemeProvider } from "@emotion/react";
import theme from "./shared/theme/config/theme.ts";
import { AlertProvider } from "./widget/confirm/ui/AlertModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ThemeProvider>
  </StrictMode>
);
