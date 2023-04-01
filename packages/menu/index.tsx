import React, { ReactNode } from 'react';
import './index.scss';
import classNames from 'classnames';

type KeyPath = string // '0.0' '0.2'
type InnerMenuItemKey = string[];
export type MenuItemTypeKey = InnerMenuItemKey | KeyPath;

export type MenuItemType = 'default' | 'category' | 'group';

interface MenuItem {
  label?: ReactNode;
  key?: React.Key; // 用于 selectedKey 方便设置选中状态，还可以存数据
  children?: MenuItem[];
  type?: MenuItemType;
  // disabled?: boolean;
  // collapsed?: boolean;
}

export interface MenuProps {
  // 'horizontal' 待完善，'vertical' 待添加
  mode?: 'inline' | 'horizontal'; // 菜单类型，默认是 inline
  items: MenuItem[];
  selectedKeys?: MenuItemTypeKey;
  onClick?: (e: { keys: string[], type: MenuItemType }) => void;
  // openedKeys?: string[];
  // onClick?: (e: { keys: string[], type: MenuItemType, preventDefault: () => void }) => void;
}

// export interface MenuClickEvent {
//   keys: string[];
//   type: MenuItemType;
//   preventDefault: () => void;
// }

export default function Menu(props: MenuProps) {
  const { selectedKeys, items, onClick, mode = 'inline' } = props;
  const innerSelectedKeys = typeof selectedKeys === 'string' ? selectedKeys.split('.') : selectedKeys ?? [];
  // 折叠功能待完善
  // const [collapsedKeysDict, setCollapsedKeysDict] = useState<any>({});

  const handleMenuClick = (keys: string[], type: MenuItemType) => {
    onClick?.({ keys, type });
    // let autoToggleCollapsed = true;
    // const preventDefault = () => {
    //   autoToggleCollapsed = false;
    // };
    // onClick?.({ keys, type, preventDefault });
    // if (autoToggleCollapsed) {
    //   const newCollapsedKeysDict = { ...collapsedKeysDict };
    //   if (get(newCollapsedKeysDict, keys) === true) {
    //     set(newCollapsedKeysDict, keys, false);
    //   } else {
    //     set(newCollapsedKeysDict, keys, true);
    //   }
    //   setCollapsedKeysDict(newCollapsedKeysDict);
    // }
  };

  // 这里解释一下下面写到的 index 和 index2 的含义
  // index 在外置位没有传递 key 时作为 menu 的 key
  // index2 是遍历 children 得到位置索引，在递归中充当下个调用的 index
  const getMenu = (menu: MenuItem, index: number, keys?: string[]) => {
    // 这里解释一下选中状态判断方式，如果是选中状态的 menu，它的层级 key 必须和 innerSelectedKeys 一一对应
    // String(menu.key ?? index) 对应的是 innerSelectedKeys 中最后一位
    // keys 数组对应 innerSelectedKeys 的前面位置
    const _keys = keys ? [...keys, String(menu.key ?? index)] : [String(menu.key ?? index)];
    const menuItemType = menu?.type ? menu.type : menu?.children ? 'category' : 'default';

    // 判断当前 menu 是否是激活态，激活态的父节点我称呼它为路径激活态
    let menuActive = false;
    let menuPathActive = false;
    if (innerSelectedKeys.length === _keys.length && menuItemType !== 'group') {
      menuActive = _keys.every((key, index) => key === innerSelectedKeys[index]);
    } else if (innerSelectedKeys.length > _keys.length && menuItemType !== 'group') {
      menuPathActive = _keys.every((key, index) => key === innerSelectedKeys[index]);
    }

    const menuLabelStyle = mode === 'inline' ? { paddingLeft: `${30 * (keys ? keys.length + 1 : 1)}px` } : undefined;

    return (
      <li key={String(menu.key ?? index)}>
        <div
          className={classNames('mcxueMenuLabel', {
            mcxueActive: menuActive,
            mcxuePathActive: menuPathActive,
            mcxueMenuItemLevel1: !keys,
            mcxueMenuItemTypeCategory: menuItemType === 'category',
            mcxueMenuItemTypeGroup: menuItemType === 'group',
          })}
          style={menuLabelStyle}
          onClick={(e) => {
            e.stopPropagation(); // 阻止合成事件的冒泡
            handleMenuClick(_keys, menuItemType);
          }}
        >
          {menu.label}
        </div>
        {
          menu.children &&
          <ul className={classNames('mcxueMenu', {
            // mcxueHidden: get(collapsedKeysDict, _keys) === true,
          })}>
            {menu.children.map((menu, index2) => getMenu(menu, index2, _keys))}
          </ul>
        }
      </li>
    );
  };

  return (
    <ul className={classNames('mcxueMenu', {
      mcxueInlineMode: mode === 'inline',
      mcxueHorizontalMode: mode === 'horizontal',
      // mcxueVerticalMode: mode === 'vertical',
    })}>
      {
        items.map((menu, index) => getMenu(menu, index))
      }
    </ul>
  );
}
