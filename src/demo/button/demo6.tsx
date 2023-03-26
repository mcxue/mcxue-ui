import { Button, Space } from 'mcxue-ui';
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
      <Button loading>加载中</Button>
      <Button loading iconPosition="right" bgType="filled">加载中</Button>
      <Button loading={loadingStatus} onClick={handleButtonClick} type="plain" icon="add" round>点击我试试</Button>
      <Button loading={loadingStatus} type="plain" icon="search" iconPosition="right">搜索</Button>
      <Button loading={loadingStatus} icon="scan" round />
    </Space>
  );
}
