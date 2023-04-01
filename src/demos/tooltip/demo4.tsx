import { Button, Space, Tooltip } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Tooltip content="文字提示气泡框" color="tan">
        <Button type="plain">tan</Button>
      </Tooltip>
      <Tooltip content="文字提示气泡框" color="cyan">
        <Button type="plain">cyan</Button>
      </Tooltip>
      <Tooltip content="文字提示气泡框" color="#F50">
        <Button type="plain">#F50</Button>
      </Tooltip>
      <Tooltip content="文字提示气泡框" color="#2DB7F5">
        <Button type="plain">#2DB7F5</Button>
      </Tooltip>
      <Tooltip content="文字提示气泡框" color="#87D068">
        <Button type="plain">#87D068</Button>
      </Tooltip>
      <Tooltip content="文字提示气泡框" color="#108EE9">
        <Button type="plain">#108EE9</Button>
      </Tooltip>
    </Space>
  );
}
