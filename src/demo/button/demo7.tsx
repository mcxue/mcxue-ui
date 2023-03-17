import { Button, Space } from '../../../index';
import React, { useState } from 'react';

export default function Demo() {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const handleButtonClick = () => {
    if (!loadingStatus) {
      setLoadingStatus(true);
    }
    setTimeout(() => {
      setLoadingStatus(false);
    }, 2000);
  };
  return (
    <Space>
      <Button disabled loading>加载中</Button>
      <Button disabled loading iconPosition="right" bgType="filled">加载中</Button>
      <Button disabled loading={loadingStatus} onClick={handleButtonClick} type="plain" icon="add" round>点击我试试</Button>
      <Button disabled loading={loadingStatus} onClick={handleButtonClick} type="plain" icon="search" iconPosition="right">搜索</Button>
      <Button disabled loading={loadingStatus} icon="scan" round />
    </Space>
  );
}
