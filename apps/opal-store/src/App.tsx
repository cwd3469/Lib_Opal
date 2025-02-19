import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/ui/LoginPage";
import ScreenLayout from "./shared/layout/ui/ScreenLayout";
import MainPage from "./pages/main/ui/MainPage";
import PrivateLayout from "./shared/layout/ui/PrivateLayout";
import { AuthInterface } from "./pages/main/config/interface";
import MembershipPage from "./pages/membership/ui/MembershipPage";
import DashboardPage from "./pages/dashboard/ui/DashboardPage";
import ShellPage from "./pages/shell/ui/ShellPage";
import RetreatPage from "./pages/retreat/ui/RetreatPage";

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
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/shell" element={<ShellPage />} />
            <Route path="/retreat" element={<RetreatPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
