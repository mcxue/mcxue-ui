import React from 'react';
import UiUsageLayout from '../../components/UiUsageLayout';
import { UI_USAGE_MENU_ITEMS } from '../../pages/uiUsage/constants';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import uiUsageRouteConfig from '../../pages/uiUsage/routeConfig';

const uiUsageRoute = {
  path: 'ui-usage',
  element: (
    <ConfigProvider locale={zhCN}>
      <UiUsageLayout menuItems={UI_USAGE_MENU_ITEMS} />
    </ConfigProvider>
  ),
  children: uiUsageRouteConfig,
};

export default uiUsageRoute;
