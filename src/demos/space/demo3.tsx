import React from 'react';
import { Button } from 'mcxue-ui';
import { Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space gap="30px">
      <Button icon="edit">编辑</Button>
      <Button icon="copy" type="plain">复制</Button>
      <Button icon="search" bgType="filled" round>搜索</Button>
      <Button icon="scan" type="plain">扫描</Button>
      <Button icon="success" iconPosition="right" type="success">成功</Button>
    </Space>
  );
}
