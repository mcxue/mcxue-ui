import React, { Suspense, useMemo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import Menu from '../../../packages/menu';
import TailInfo from '../tailInfo';
import Loading from '../loading';

const MENU_ITEMS = [
  {
    label: '快速上手',
    children: [
      {
        label: '起步',
        key: '/start/install',
      },
      {
        label: '更新日志',
        key: '/start/changeLog',
      },
    ],
  },
  {
    label: '通用',
    children: [
      {
        label: 'Button 按钮',
        key: '/start/components/button',
      },
      // {
      //   label: 'Switch 开关',
      //   key: '/start/components/switch',
      // },
    ],
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string): string | string[] => {
    if (s === '/start/install' || s === '/start/changeLog') {
      return `0.${s}`;
    } else if (/\/start\/components/) {
      const result = /(\/start\/components\/.*)$/.exec(s);
      return result ? `1.${result[1]}` : '';
    } else {
      return '';
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <>
      <Menu items={MENU_ITEMS} selectedKeys={selectedKeys} onClick={(e => {
        if (!e.isGroup) {
          navigate(e.keys[e.keys.length - 1]);
        }
      })} />
    </>
  );
};

export default function DocLayout() {
  return (
    <div className={style.docLayout}>
      <div style={{ height: '100%', overflow: 'scroll' }}>
        <Nav />
      </div>
      <Suspense fallback={<Loading />}>
        <div style={{ height: '100%', overflow: 'scroll' }}>
          <div style={{ margin: '0 60px', maxWidth: '1260px' }}>
            <Outlet />
            <TailInfo />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

