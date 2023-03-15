import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import './index.scss';

interface TabsProps {
  items: TabProps[];
  defaultActiveKey?: React.Key;
  onTabClick?: (selectedKey: React.Key) => void;
  type?: 'line' | 'card';
}

interface TabProps {
  label: ReactNode,
  content?: ReactNode,
  key?: React.Key, // 如果不传入 key，则默认当前 item 的 index
  disabled?: boolean,
}

const Tabs = ({ items, defaultActiveKey, onTabClick, type, ...restProps }: TabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey ?? items?.[0].key ?? 0);
  const renderLabels = () => items.map((tab, index) => {
    return (
      <li
        className={classNames('mcxueTabsNavItem', { active: activeKey === (tab?.key ?? index) })}
        key={tab.key ?? index}
        onClick={() => {
          if (tab?.disabled) return;
          onTabClick && onTabClick(tab?.key ?? index);
          setActiveKey(tab?.key ?? index);
        }}
      >
        {tab.label}
      </li>
    );
  });
  const renderContent = () => {
    return <div className="mcxueTabsContentItem">{items.find(tab => tab.key === activeKey)?.content ?? ''}</div>;
  };
  return (
    <div className="mcxueTabs" {...restProps}>
      <ul className={classNames('mcxueTabsNav', { 'navCard': type === 'card' })}>{renderLabels()}</ul>
      <div className="mcxueTabsContent">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
