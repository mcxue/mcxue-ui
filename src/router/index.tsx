import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import DocLayout from '../components/docLayout';
import RootLayout from '../components/rootLayout';
import React, { ReactNode } from 'react';

const PAGE_PATH_DICT = {
  home: '../pages/home',
  install: '../pages/install',
  changeLog: '../pages/changeLog',
  errorPage: '../pages/errorPage',
};

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

const lazyLoad = (path: string): ReactNode => {
  const Module = React.lazy(() => import(/* @vite-ignore */ path));
  return <Module />;
};

const baseRouter: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: lazyLoad(PAGE_PATH_DICT['errorPage']),
    children: [
      {
        path: '',
        element: lazyLoad(PAGE_PATH_DICT['home']),
      },
      {
        path: 'start',
        element: <DocLayout />,
        children: [
          {
            path: '*',
            element: lazyLoad(PAGE_PATH_DICT['install']),
          },
          {
            path: 'changeLog',
            element: lazyLoad(PAGE_PATH_DICT['changeLog']),
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
