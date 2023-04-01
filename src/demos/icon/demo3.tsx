import { Icon, Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <div>
      <Space style={{ fontSize: '36px' }}>
        <Icon name="info" color="#367BF5" />
        <Icon name="success" color="#2FA84F" />
        <Icon name="error" color="#FA5D50" />
        <Icon name="warning" color="#F3AA18" />
      </Space>
      <Space>
        <Icon name="info" color="#367BF5" fontSize="54px" />
        <Icon name="success" color="#2FA84F" fontSize="54px" />
        <Icon name="error" color="#FA5D50" fontSize="54px" />
        <Icon name="warning" color="#F3AA18" fontSize="54px" />
      </Space>
    </div>
  );
}
