import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Overview from './Overview';
import Profile from './Profile';
import Settings from './Settings';
import ErrorPage from './ErrorPage';

const appContainer = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const header = {
  backgroundColor: '#343a40',
  padding: '1rem',
  textAlign: 'center',
};

const headerText = {
  color: 'white',
  margin: 0,
};

const content = {
  flex: 1,
};

const RootLayout = () => (
  <div style={appContainer}>
    <header style={header}>
      <h1 style={headerText}>My Application</h1>
    </header>
    <div style={content}>
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: 'overview', element: <Overview /> },
          { path: 'profile', element: <Profile /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

const App3 = () => <RouterProvider router={router} />;
export default App3;
