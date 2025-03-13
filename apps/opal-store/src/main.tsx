import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./shared/styles/lib/reset.css";
import "./shared/styles/lib/normalize.css";

import theme from "./shared/theme/config/theme.ts";
import { AlertProvider } from "./shared/ui/confirm/ui/AlertModalProvider.tsx";

import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AlertProvider>
    </ThemeProvider>
  </StrictMode>
);
