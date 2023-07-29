import React, { Suspense, useMemo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { Menu, MenuProps } from 'mcxue-ui';
import TailInfo from '../TailInfo';
import Loading from '../Loading';

const Nav = (props: {menuItems: MenuProps['items']}) => {
  const { menuItems } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string): string | string[] => {
    if (['/components/start', '/components/changeLog'].indexOf(s) >= 0) {
      return `0.${s}`;
    } else {
      const result = /(\/components\/.*)$/.exec(s);
      let index = 0;
      if (result) {
        for (let i = 1; i < menuItems.length; i++) {
          if (menuItems[i]?.children?.some(menu => menu.key === result[1])) {
            index = i;
            break;
          }
        }
      }
      return result ? `${index}.${result[1]}` : '';
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <>
      <Menu items={menuItems} selectedKeys={selectedKeys} onClick={(e => {
        if (e.type === 'default') {
          navigate(e.keys[e.keys.length - 1]);
        }
      })} />
    </>
  );
};

export default function DocLayout(props: {menuItems: MenuProps['items']}) {
  return (
    <div className={style.docLayout}>
      <div style={{ height: '100%', overflow: 'scroll' }}>
        <Nav menuItems={props.menuItems} />
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

