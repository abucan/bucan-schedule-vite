import { createBrowserRouter, RouterProvider } from 'react-router';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Layout from './components/Layout';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
