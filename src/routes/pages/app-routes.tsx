import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useMemo } from 'react';
import { Home } from '@modules/home';
import { Landing } from '@modules/landing';
import { Checkout } from '@modules/checkout';
import { BookDetail } from '@modules/books';
import { NavBar } from '@/components/nav-bar/nav-bar';

const ROUTES_WITHOUT_NAVBAR = ['/home','/checkout'];


const Layout = () => {
  const location = useLocation();
  const shouldShowNavBar = !ROUTES_WITHOUT_NAVBAR.includes(location.pathname);

  return (
    <div className='app'>
      {shouldShowNavBar && <NavBar />}
      <Outlet />
    </div>
  );
};

const AppRoutes = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: <Layout />,
          children: [
            {
              path: '/home',
              element: <Landing />,
            },
            {
              path: '/books',
              element: <Home />,
            },
            {
              path: '/book/:id',
              element: <BookDetail />,
            },
            {
              path: '/checkout',
              element: <Checkout />,
            },
            {
              path: '*',
              element: <Navigate to='/home' replace />,
            },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default AppRoutes;
