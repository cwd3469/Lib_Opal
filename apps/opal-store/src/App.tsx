import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/ui/LoginPage";
import ScreenLayout from "./shared/layout/ui/ScreenLayout";
import MainPage from "./pages/main/ui/MainPage";
import PrivateLayout from "./shared/layout/ui/PrivateLayout";
import { AuthInterface } from "./pages/main/config/interface";

function App() {
  const data: AuthInterface = {
    name: "강남교회",
    logo: "https://cdn.pixabay.com/photo/2015/04/04/20/18/label-707026_1280.png",
    permission: "EXECUTIVES",
  };

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<ScreenLayout />}>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateLayout data={data} />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/membership" element={<>membership</>} />
            <Route path="/dashboard" element={<>dashboard</>} />
            <Route path="/shell" element={<>shell</>} />
            <Route
              path="/retreat/participants-list"
              element={<>participants</>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
