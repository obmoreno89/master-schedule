import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.scss';
import './charts/ChartjsConfig';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';

//COMPONENTS PASSWORD
import ResetPassword from './pages/ResetPassword';
import VerificationPassword from './pages/VerificationPassword';
import ConfirmNewPassword from './pages/ConfirmNewPassword';

//PRIVATE ROUTE AND PUBLIC ROUTE
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

//SYSTEM STATUS
import SystemStatus from './partials/systemStatus/SystemStatus';

//PLANNING
import Planning from './partials/planning/Planning';
import Capabilities from './pages/Capabilities';
import User from './pages/User';

//MANAGEMENT
import Management from './pages/Management';

//COMPONENTS FOR DESIGN
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          exact
          path='mp-pro/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='mp-pro/signin'
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />

        <Route
          path='mp-pro/reset-password'
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />

        <Route
          path='/mp-pro/verification-code/'
          element={
            <PublicRoute>
              <VerificationPassword />
            </PublicRoute>
          }
        />

        <Route
          path='/mp-pro/confirm-password/'
          element={
            <PublicRoute>
              <ConfirmNewPassword />
            </PublicRoute>
          }
        />

        <Route
          path='/mp-pro/system-status/'
          element={
            <PrivateRoute>
              <SystemStatus />
            </PrivateRoute>
          }
        />

        <Route
          path='/mp-pro/planning/'
          element={
            <PrivateRoute>
              <Planning />
            </PrivateRoute>
          }
        />

        <Route
          path='/mp-pro/planning/capabilities/'
          element={
            <PrivateRoute>
              <Capabilities />
            </PrivateRoute>
          }
        />

        <Route
          path='/mp-pro/management/user/'
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />

        <Route
          path='/mp-pro/management/register-user/'
          element={
            <PrivateRoute>
              <Management />
            </PrivateRoute>
          }
        />

        <Route path='/utility/404' element={<PageNotFound />} />

        {/* COMPONENTS FOR DESIGN */}
        <Route path='/component/button' element={<ButtonPage />} />
        <Route path='/component/form' element={<FormPage />} />
        <Route path='/component/dropdown' element={<DropdownPage />} />
        <Route path='/component/alert' element={<AlertPage />} />
        <Route path='/component/modal' element={<ModalPage />} />
        <Route path='/component/pagination' element={<PaginationPage />} />
        <Route path='/component/tabs' element={<TabsPage />} />
        <Route path='/component/breadcrumb' element={<BreadcrumbPage />} />
        <Route path='/component/badge' element={<BadgePage />} />
        <Route path='/component/avatar' element={<AvatarPage />} />
        <Route path='/component/tooltip' element={<TooltipPage />} />
        <Route path='/component/accordion' element={<AccordionPage />} />
        <Route path='/component/icons' element={<IconsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
