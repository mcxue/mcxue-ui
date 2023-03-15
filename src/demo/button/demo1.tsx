import React, { ReactNode } from 'react';
import { Button } from '../../../packages';

const Space = (props: { children: ReactNode }) => {
  const { children } = props;
  const spaceStyle = {
    display: 'flex',
    flexFlow: 'wrap',
    gap: '10px 10px',
  };
  return (
    <div style={spaceStyle}>
      {children}
    </div>
  );
};

export default function Demo() {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button type="plain">朴素按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="fail">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="text">文本按钮</Button>
    </Space>
  );
}
