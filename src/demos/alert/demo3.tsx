import { Alert, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert message="一条警告提示" type="warning" closable />
      <Alert message="一条错误提示" type="error" closable />
    </Space>
  );
}
