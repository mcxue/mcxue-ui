import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import DocLayout from '../components/docLayout';
import RootLayout from '../components/rootLayout';
import React from 'react';

const Home = React.lazy(() => import('../pages/home'));
const Start = React.lazy(() => import('../pages/start'));
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
  console.log(list);
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
        path: 'components',
        element: <DocLayout />,
        children: [
          {
            path: '*',
            element: <Start />,
          },
          ...getComponentRouteChildren(),
          {
            path: 'changeLog',
            element: <ChangeLog />,
          },
        ],
      },
      {
        path: 'ui-usage',
        element: <DocLayout />,
        children: [],
      },
    ],
  },
];

const router = createBrowserRouter(baseRouter);

export default router;
