import { MenuProps } from '../../../packages/menu';

export const COMPONENTS_MENU_ITEMS: MenuProps['items'] = [
  {
    label: '快速上手',
    type: 'group',
    children: [
      {
        label: '起步',
        key: '/components/start',
      },
      {
        label: '更新日志',
        key: '/components/changeLog',
      },
    ],
  },
  {
    label: '通用',
    type: 'group',
    children: [
      {
        label: 'Button 按钮',
        key: '/components/button',
      },
      {
        label: 'Switch 开关',
        key: '/components/switch',
      },
      {
        label: 'Space 间距',
        key: '/components/space',
      },
      {
        label: 'Icon 图标',
        key: '/components/icon',
      },
      {
        label: 'Portal 传送门',
        key: '/components/portal',
      },
    ],
  },
  {
    label: '反馈',
    type: 'group',
    children: [
      {
        label: 'Alert 警告提示',
        key: '/components/alert',
      },
      {
        label: 'Message 全局提示',
        key: '/components/message',
      },
    ],
  },
  {
    label: '数据展示',
    type: 'group',
    children: [
      {
        label: 'Tooltip 文字提示',
        key: '/components/tooltip',
      },
      {
        label: 'Table 表格',
        key: '/components/table',
      },
    ],
  },
  {
    label: '导航',
    type: 'group',
    children: [
      {
        label: 'Menu 菜单',
        key: '/components/menu',
      },
    ],
  },
];
