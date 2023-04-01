import { Button, Space, Tooltip } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Tooltip arrow content="文字提示气泡框" placement="top">
        <Button type="plain">上面弹出</Button>
      </Tooltip>
      <Tooltip arrow content="文字提示气泡框" placement="bottom">
        <Button type="plain">下面弹出</Button>
      </Tooltip>
      <Tooltip arrow content="文字提示气泡框" placement="left">
        <Button type="plain">左面弹出</Button>
      </Tooltip>
      <Tooltip arrow content="文字提示气泡框" placement="right">
        <Button type="plain">右面弹出</Button>
      </Tooltip>
    </Space>
  );
}

