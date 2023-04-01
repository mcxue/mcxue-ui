import { Menu, MenuItemTypeKey, MenuProps } from 'mcxue-ui';
import { useState } from 'react';

export default function Demo() {
  const menuItems: MenuProps['items'] = [
    {
      label: '素菜',
      type: 'group',
      children: [
        { label: '拔丝土豆' },
        { label: '炒茄子' },
      ],
    },
    {
      label: '荤菜',
      type: 'group',
      children: [
        { label: '宫保鸡丁' },
        { label: '咕噜肉' },
      ],
    },
    {
      label: '水产',
      type: 'group',
      children: [
        { label: '白灼虾' },
        { label: '鳊鱼炖豆腐' },
      ],
    },

  ];
  const [menuSelectedKeys, setMenuSelectedKeys] = useState<MenuItemTypeKey>('0.0');
  return (
    <Menu
      items={menuItems}
      selectedKeys={menuSelectedKeys}
      onClick={(e) => {
        if (e.type !== 'group') {
          setMenuSelectedKeys(e.keys);
        }
      }}
    />
  );
}
