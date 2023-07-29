import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import componentsRoute from './routes/componentsRoute';
import uiUsageRoute from './routes/uiUsageRoute';

const Home = React.lazy(() => import('../pages/Home'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));

const baseRouter: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      componentsRoute,
      uiUsageRoute,
    ],
  },
];

const router = createBrowserRouter(baseRouter);

export default router;
