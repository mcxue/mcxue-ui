import { MenuProps } from 'mcxue-ui';

export const UI_USAGE_MENU_ITEMS: MenuProps['items'] = [
  {
    label: '常用',
    type: 'group',
    children: [
      {
        label: 'McTable 表格',
        key: '/ui-usage/mc-table',
      },
      {
        label: 'McFormItem 通用表单字段',
        key: '/ui-usage/mc-form-item',
      },
    ],
  },
];
