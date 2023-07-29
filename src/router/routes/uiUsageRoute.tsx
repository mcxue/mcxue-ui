import React from 'react';
import UiUsageLayout from '../../components/UiUsageLayout';
import McTable from '../../pages/uiUsage/McTable';
import McFormItem from '../../pages/uiUsage/McFormItem';
import { UI_USAGE_MENU_ITEMS } from '../../pages/uiUsage/constants';

const uiUsageRoute = {
  path: 'ui-usage',
  element: <UiUsageLayout menuItems={UI_USAGE_MENU_ITEMS} />,
  children: [
    {
      path: 'mc-table',
      element: <McTable />,
    },
    {
      path: 'mc-form-item',
      element: <McFormItem />,
    },
  ],
};

export default uiUsageRoute;
