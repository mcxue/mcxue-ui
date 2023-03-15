import { Tabs } from '../../../packages';
import React from 'react';
import style from './index.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../../packages/icon';

const MENU_LIST = [
  { name: '首页', path: '/' },
  { name: '组件', path: '/start/install' },
  { name: '更新日志', path: 'start/changeLog' },
];

export default function CommonMenu() {
  const navigate = useNavigate();
  return (
    <menu className={style.menu}>
      <div className="logo">
        <Icon name="logo" />
        <span>Mcxue</span>
      </div>
      <Tabs
        type="card"
        items={MENU_LIST.map(menu => ({
          label: <h1 onClick={() => {navigate(menu.path);}}>{menu.name}</h1>,
        }))}
      />
      <div className="links">
        <Link target="_blank" rel="noreferrer" to="https://github.com/mcxue/mcxue-ui">
          <Icon
            name="github" />
        </Link>
        <Link target="_blank" rel="noreferrer" to="https://www.npmjs.com/package/mcxue-ui">
          <Icon
            name="npm" />
        </Link>
      </div>
    </menu>
  );
}
