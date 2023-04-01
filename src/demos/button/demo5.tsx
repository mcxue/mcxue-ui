import { Button, Space } from 'mcxue-ui';
import React from 'react';

export default function Demo() {
  return (
    <Space>
      <Button icon="edit">编辑</Button>
      <Button icon="copy" type="plain">复制</Button>
      <Button icon="search" bgType="filled" round>搜索</Button>
      <Button icon="scan" type="plain">扫描</Button>
      <Button icon="add" iconPosition="right" bgType="filled">添加</Button>
      <Button icon="settings" iconPosition="right" type="plain">设置</Button>
      <Button icon="success" iconPosition="right" type="success">成功</Button>
      <Button icon="error" iconPosition="right" type="error">失败</Button>
      <Button icon="edit" bgType="filled" />
      <Button icon="search" type="plain" round />
      <Button icon="copy" type="plain" round />
      <Button icon="scan" type="plain" round />
    </Space>
  );
}
