import { Button, Space, Tooltip } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Tooltip arrow={false} content="文字提示气泡框">
        <Button type="plain">隐藏箭头</Button>
      </Tooltip>
      <Tooltip arrow content="文字提示气泡框" offset={20}>
        <Button type="plain">向上偏移 20 px</Button>
      </Tooltip>
      <Tooltip arrow content="文字提示气泡框" placement="right" offset={20}>
        <Button type="plain">向右偏移 20 px</Button>
      </Tooltip>
    </Space>
  );
}
