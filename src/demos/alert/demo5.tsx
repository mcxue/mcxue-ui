import { Alert, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert type="success" showIcon message="一条成功提示" />
      <Alert type="info" showIcon message="用法" description="点击这里复制，啦啦啦啦啦" closable />
      <Alert type="warning" showIcon message="一条警告提示" closable />
      <Alert type="error" showIcon message="错误" description="复制出错了，呜呜呜呜呜" />
    </Space>
  );
}
