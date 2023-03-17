import React, { ReactNode } from 'react';
import './index.scss';
import classNames from 'classnames';

interface MenuItem {
  label?: ReactNode;
  key?: React.Key; // 用于 selectedKey，可以存数据
  children?: MenuItem[];
  // customData?: any;
  // disabled?: boolean;
  // isGroup?: boolean;
}

type KeyPath = string // '0.0' '0.2'

interface Props {
  mode?: 'horizontal' | 'inline' | 'vertical'; // 菜单类型，默认是 inline
  items: MenuItem[];
  selectedKeys?: string[] | KeyPath;
  onClick?: (e: { keys: string[], isGroup: boolean }) => void;
}

// todo 先写的残血版的内嵌型 inline，后写的残血版的 horizontal，以后再写 vertical
export default function Menu(props: Props) {
  const { selectedKeys, items, onClick, mode = 'inline' } = props;
  const innerSelectedKeys = typeof selectedKeys === 'string' ? selectedKeys.split('.') : selectedKeys ?? [];
  // todo 默认全部展开，展示和合并的功能以后再添加哈
  // const [openedMenuKeys, setOpenedMenuKeys] = useState<string[]>([]);
  const handleMenuClick = (keys: string[], isGroup: boolean) => {
    onClick?.({ keys, isGroup });
  };
  // 这里解释一下下面写到的 index 和 index2 的含义
  // index 在外置位没有传递 key 时作为 menu 的 key
  // index2 是遍历 children 得到位置索引，在递归中充当下个调用的 index
  const getMenu = (menu: MenuItem, index: number, keys?: string[]) => {
    // 这里解释一下选中状态判断方式，如果是选中状态的 menu，它的层级 key 必须和 innerSelectedKeys 一一对应
    // String(menu.key ?? index) 对应的是 innerSelectedKeys 中最后一位
    // keys 数组对应 innerSelectedKeys 的前面位置
    const _keys = keys ? [...keys, String(menu.key ?? index)] : [String(menu.key ?? index)];
    const isActive = () => {
      if (innerSelectedKeys.length !== _keys.length) return false;
      return _keys.every((key, index) => key === innerSelectedKeys[index]);
    };

    const menuLabelStyle = mode === 'inline' ? { paddingLeft: `${30 * (keys ? keys.length + 1 : 1)}px` } : undefined;

    return (
      <li
        className="mcxueMenuItem"
        onClick={(e) => {
          e.stopPropagation(); // 阻止合成事件的冒泡
          handleMenuClick(_keys, Boolean(menu?.children));
        }}
        key={String(menu.key ?? index)}
      >
        <div
          className={classNames('mcxueMenuLabel', {
            mcxueMenuGroup: menu.children,
            mcxueActive: isActive(),
            mcxueMenuItemLevel1: !keys,
          })}
          style={menuLabelStyle}
        >
          {menu.label}
        </div>
        {
          menu.children &&
          <ul className="mcxueMenu">
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
      mcxueVerticalMode: mode === 'vertical',
    })}>
      {
        items.map((menu, index) => getMenu(menu, index))
      }
    </ul>
  );
}
