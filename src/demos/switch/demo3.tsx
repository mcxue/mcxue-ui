import { Button, Space, Switch } from 'mcxue-ui';
import { useState } from 'react';

export default function Demo() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Space>
        <Switch loading={loading} />
        <Switch checked loading={loading} />
      </Space>
      <Button style={{ marginTop: '16px' }} onClick={() => {setLoading(!loading);}}>切换状态</Button>
    </>
  );
}
