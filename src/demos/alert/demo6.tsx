import { Alert, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert message="一条信息提示" closable closeIcon={<span>关闭</span>} />
      <Alert type="warning" showIcon closable closeIcon={<span>关闭</span>} message="一条警告提示"/>
      <Alert type="error" showIcon closable closeIcon={<span>关掉</span>} message="一条错误提示" description="复制出错了，呜呜呜呜呜" />
    </Space>
  );
}
