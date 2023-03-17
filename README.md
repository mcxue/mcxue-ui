# Mcxue UI 组件库

官网主页待发布～

## 安装
```
npm instll mcxue-ui
yarn add mcxue-ui
```

## 引入并使用
```
import React from 'react';
import { Button } from 'mcxue-ui';
import { Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button type="plain">朴素按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="text">文本按钮</Button>
    </Space>
  );
}

```
