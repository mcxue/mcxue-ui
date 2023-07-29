import DocLayout from '../../components/DocLayout';
import React from 'react';
import { RouteObject } from 'react-router-dom';
import { COMPONENTS_MENU_ITEMS } from './constants';

const Start = React.lazy(() => import('../../pages/Start'));
const ChangeLog = React.lazy(() => import('../../pages/ChangeLog'));

const getComponentRouteChildren = (): RouteObject[] => {
  const list: RouteObject[] = [];
  const files = import.meta.glob('../../pages/usage/*.tsx');
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


const componentsRoute = {
  path: 'components',
  element: <DocLayout menuItems={COMPONENTS_MENU_ITEMS} />,
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
};

export default componentsRoute;
