import { SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'type',
      type: `'default' | 'plain' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text'`,
      required: '否',
      default: 'default',
      description: `设置按钮类型，有八种，默认是 default 类型`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
