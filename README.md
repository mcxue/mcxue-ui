# Mcxue UI 组件库

一套轻量级的 React UI 组件库，使用 Vite + TS + React18 开发，体积小，响应快

目前组件还不够丰富，在慢慢开发中

文档查阅：[https://ui.mcxue.cn](https://ui.mcxue.cn)

## 安装

```
npm install mcxue-ui
yarn add mcxue-ui
```

## 引入样式文件

需要在项目的主入口处引入组件库的样式文件，比如在 `main.tsx` 中添加以下这一句

```
import 'mcxue-ui/dist/style.css'
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

## 缘起

平时会在个人网站上编写一些页面，发现许多地方都可以复用，因此想定制一套自己的组件库，以便在以后的开发中能够更加高效地使用这些组件

组件 API 主要参考 [Ant Design](https://ant.design/components/overview-cn/) , 详情以文档为准
