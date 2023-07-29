import { SubSubTitle, SubTitle } from '../../components/Title';
import ApiTable, { ApiTableProps } from '../../components/ApiTable';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'disabled',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: `不可用状态`,
    },
    {
      param: 'checked',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: `初始时是否选中`,
    },
    {
      param: 'loading',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: `加载中状态`,
    },
    {
      param: 'checkedTextNode',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: `选中态时显示的文本内容`,
    },
    {
      param: 'checkedTextNode',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: `非选中态时显示的文本内容`,
    },
    {
      param: 'onClick',
      type: `(checked: boolean) => void`,
      required: '否',
      default: null,
      description: `点击时的回调函数，会将最新状态放在参数上`,
    },
    {
      param: 'onChange',
      type: `(checked: boolean) => void`,
      required: '否',
      default: null,
      description: `状态发生变化时的回调函数，会将最新状态放在参数上`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="SwitchProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
