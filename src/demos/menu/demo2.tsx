import { Menu, MenuItemTypeKey, MenuProps } from 'mcxue-ui';
import { useState } from 'react';

export default function Demo() {
  const menuItems: MenuProps['items'] = [
    { label: '素菜' },
    { label: '荤菜' },
    { label: '水产' },
    { label: '早餐' },
    { label: '主食' },
    { label: '半成品加工' },
    { label: '汤与粥' },
  ];
  const [menuSelectedKeys, setMenuSelectedKeys] = useState<MenuItemTypeKey>('0');
  return (
    <Menu
      items={menuItems}
      mode="horizontal"
      selectedKeys={menuSelectedKeys}
      onClick={(e) => {
        setMenuSelectedKeys(e.keys);
      }}
    />
  );
}
