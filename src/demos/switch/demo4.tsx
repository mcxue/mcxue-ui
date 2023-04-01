import { Button, Space, Switch } from 'mcxue-ui';
import { useState } from 'react';

export default function Demo() {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <Space>
        <Switch disabled={disabled} />
        <Switch checked disabled={disabled} />
      </Space>
      <Button style={{ marginTop: '16px' }} onClick={() => {setDisabled(!disabled);}}>切换状态</Button>
    </>
  );
}
