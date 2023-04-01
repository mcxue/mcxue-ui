import { Icon, Space, Switch } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Switch checkedTextNode="开" uncheckedTextNode="关" />
      <Switch checked checkedTextNode={<Icon name="selected" />} uncheckedTextNode={<Icon name="close" />} />
    </Space>
  );
}
