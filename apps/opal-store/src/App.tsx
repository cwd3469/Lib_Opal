import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/ui/LoginPage";
import ScreenLayout from "./shared/layout/ui/ScreenLayout";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<ScreenLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
