import React from 'react';
import { Button } from '../../../index';
import { Space } from '../../../index';

export default function Demo() {
  return (
    <>
      <Space>
        <Button size="small">Small 按钮</Button>
        <Button>Medium 按钮</Button>
        <Button size="large">Large 按钮</Button>
        <Button size="small" bgType="filled">Small 按钮</Button>
        <Button bgType="filled">Medium 按钮</Button>
        <Button size="large" bgType="filled">Large 按钮</Button>
      </Space>
      <Space style={{ marginTop: '10px' }}>
        <Button bold size="small" bgType="smooth">加粗的小字</Button>
        <Button bold bgType="smooth">加粗的字</Button>
        <Button bold size="large" bgType="smooth">加粗的大字</Button>
        <Button bold size="small" round type="info">加粗的字</Button>
        <Button bold round type="info">加粗的字</Button>
        <Button bold size="large" round type="info">加粗的大字</Button>
      </Space>
    </>
  );
}
