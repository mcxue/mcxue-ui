import { Alert, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert message="一条成功提示" type="success" />
      <Alert message="一条信息提示" type="info" />
      <Alert message="一条警告提示" type="warning" />
      <Alert message="一条错误提示" type="error" />
    </Space>
  );
}
