import React from 'react';
import { Button } from '../../../index';
import { Space } from '../../../index';

export default function Demo() {
  return (
    <Space>
      <Button>悬浮效果</Button>
      <Button bgType="smooth">平滑效果</Button>
      <Button bgType="filled">填充效果</Button>
      <Button bgType="ghost">幽灵效果</Button>
    </Space>
  );
}
