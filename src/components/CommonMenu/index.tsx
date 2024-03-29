import React, { useCallback, useMemo } from 'react';
import style from './index.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Menu, Icon } from 'mcxue-ui';

const MENU_ITEMS = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '组件',
    key: '/components/button',
  },
  {
    label: <div style={{ width: '120px', textAlign: 'center' }}>Ant Design 练习</div>,
    key: '/ui-usage/table',
  },
];

export default function CommonMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string) => {
    if (/\/components/.test(s)) {
      return '/components/button';
    } else if (/\/ui-usage/.test(s)) {
      return '/ui-usage/table';
    } else {
      return s;
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <menu className={style.menu}>
      <div className={style.logoWrapper}>
        <Link to="/">
          <Icon className={style.logo} name="logo" />
        </Link>
        <span className={style.text}>Mcxue UI</span>
      </div>
      <Menu
        items={MENU_ITEMS}
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={(e) => {
          if (e.keys[0] === selectedKeys) return;
          navigate(e.keys[0]);
        }}
      />
      <div className={style.externalLinks}>
        <Link target="_blank" rel="noreferrer" to="https://github.com/mcxue/mcxue-ui">
          <Button className={style.button} icon="github" type="text" round />
        </Link>
        <Link target="_blank" rel="noreferrer" to="https://www.npmjs.com/package/mcxue-ui">
          <Button className={style.button} icon="npm" type="text" round />
        </Link>
      </div>
    </menu>
  );
}
