import { Alert, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert type="success" message="成功文本" description="成功描述，哈哈哈哈哈" />
      <Alert message="信息文本" description="信息描述，啦啦啦啦啦" />
      <Alert type="warning" message="警告文本" description="警告描述，嘤嘤嘤嘤嘤" closable />
      <Alert type="error" message="错误文本" description="错误描述，呜呜呜呜呜" closable />
    </Space>
  );
}
