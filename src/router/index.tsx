import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import DocLayout from '../components/docLayout';
import RootLayout from '../components/rootLayout';
import React, { ReactNode } from 'react';

const Home = React.lazy(() => import('../pages/home'));
const Install = React.lazy(() => import('../pages/install'));
const ChangeLog = React.lazy(() => import('../pages/changeLog'));
const ErrorPage = React.lazy(() => import('../pages/errorPage'));

const getComponentRouteChildren = (): RouteObject[] => {
  const list: RouteObject[] = [];
  const files = import.meta.glob('../pages/usage/*.tsx');
  const lazyLoadWithFn = (fn: () => Promise<any>) => {
    const Module = React.lazy(fn);
    return <Module />;
  };
  for (const key in files) {
    list.push({
      path: /usage\/(.*)\.tsx/.exec(key)?.[1] ?? 'button',
      element: lazyLoadWithFn(files[key]),
    });
  }
  return list;
};

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
      {
        path: 'start',
        element: <DocLayout />,
        children: [
          {
            path: '*',
            element: <Install />,
          },
          {
            path: 'changeLog',
            element: <ChangeLog />,
          },
          {
            path: 'components',
            children: getComponentRouteChildren(),
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(baseRouter);

export default router;
