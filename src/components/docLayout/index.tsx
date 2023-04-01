import React, { Suspense, useMemo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { Menu, MenuProps } from 'mcxue-ui';
import TailInfo from '../tailInfo';
import Loading from '../loading';

const MENU_ITEMS: MenuProps['items'] = [
  {
    label: '快速上手',
    type: 'group',
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
    type: 'group',
    children: [
      {
        label: 'Button 按钮',
        key: '/start/components/button',
      },
      {
        label: 'Switch 开关',
        key: '/start/components/switch',
      },
      {
        label: 'Space 间距',
        key: '/start/components/space',
      },
      {
        label: 'Icon 图标',
        key: '/start/components/icon',
      },
      {
        label: 'Portal 传送门',
        key: '/start/components/portal',
      },
    ],
  },
  {
    label: '反馈',
    type: 'group',
    children: [
      {
        label: 'Alert 警告提示',
        key: '/start/components/alert',
      },
      {
        label: 'Message 全局提示',
        key: '/start/components/message',
      },
    ],
  },
  {
    label: '数据展示',
    type: 'group',
    children: [
      {
        label: 'Tooltip 文字提示',
        key: '/start/components/tooltip',
      },
      {
        label: 'Table 表格',
        key: '/start/components/table',
      },
    ],
  },
  {
    label: '导航',
    type: 'group',
    children: [
      {
        label: 'Menu 菜单',
        key: '/start/components/menu',
      },
    ],
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string): string | string[] => {
    if (['/start/install', '/start/changeLog'].indexOf(s) >= 0) {
      return `0.${s}`;
    } else if (/\/start\/components/) {
      const result = /(\/start\/components\/.*)$/.exec(s);
      let index = 0;
      if (result) {
        for (let i = 1; i < MENU_ITEMS.length; i++) {
          if (MENU_ITEMS[i]?.children?.some(menu => menu.key === result[1])) {
            index = i;
            break;
          }
        }
      }
      return result ? `${index}.${result[1]}` : '';
    } else {
      return '';
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <>
      <Menu items={MENU_ITEMS} selectedKeys={selectedKeys} onClick={(e => {
        if (e.type === 'default') {
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

