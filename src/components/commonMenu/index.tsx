import React, { useCallback, useMemo } from 'react';
import style from './index.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../../packages/icon';
import Menu from '../../../packages/menu';
import { Button } from '../../../index';

const MENU_ITEMS = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '组件',
    key: '/start/components/button',
  },
  {
    label: '更新日志',
    key: '/start/changeLog',
  },
];

export default function CommonMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string) => {
    if (s === '/') {
      return '/';
    } else if (s === '/start/changeLog') {
      return '/start/changeLog';
    } else {
      return '/start/components/button';
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <menu className={style.menu}>
      <div className={style.logoWrapper}>
        <Icon className={style.logo} name="logo" />
        <span className={style.text}>Mcxue UI</span>
      </div>
      <Menu
        items={MENU_ITEMS}
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={(e) => {navigate(e.keys[0]);}}
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
