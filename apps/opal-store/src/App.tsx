import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/signin/ui/LoginPage";
import MainPage from "./pages/main/ui/MainPage";
import { AuthInterface } from "./pages/main/config/interface";
import MembershipPage from "./pages/membership/ui/MembershipPage";
import DashboardPage from "./pages/dashboard/ui/DashboardPage";
import ShellPage from "./pages/shell/ui/ShellPage";
import RetreatPage from "./pages/retreat/ui/RetreatPage";
import RetreatDetailPage from "./pages/retreatDetail/ui/RetreatDetailPage";

import ScreenLayout from "./shared/layout/ui/ScreenLayout";
import PrivateLayout from "./shared/layout/ui/PrivateLayout";
import Path from "./shared/config/path";

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
            <Route path={Path.MAIN} element={<MainPage />} />
            <Route path={Path.MEMBERSHIP} element={<MembershipPage />} />
            <Route path={Path.DASHBOARD} element={<DashboardPage />} />
            <Route path={Path.SHELLll} element={<ShellPage />} />
            <Route path={Path.RETREAT}>
              <Route index element={<RetreatPage />} />
              <Route
                path={`${Path.RETREAT_DETAIL}/:id`}
                element={<RetreatDetailPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
