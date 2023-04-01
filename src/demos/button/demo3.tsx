import React from 'react';
import { Button } from 'mcxue-ui';
import { Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Button round>圆角按钮</Button>
      <Button bgType="smooth" round>圆角按钮</Button>
      <Button bgType="filled" round>圆角按钮</Button>
      <Button bgType="ghost" round>圆角按钮</Button>
      <Button type="plain" round>圆角按钮</Button>
      <Button type="success" round>圆角按钮</Button>
      <Button type="warning" round>圆角按钮</Button>
      <Button type="error" round>圆角按钮</Button>
      <Button type="info" round>圆角按钮</Button>
    </Space>
  );
}
