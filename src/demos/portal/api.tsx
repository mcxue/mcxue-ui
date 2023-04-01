import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';
import Code from '../../components/code';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'children',
      type: `ReactNode`,
      required: '是',
      default: null,
      description: `需要传送的 React 节点`,
    },
    {
      param: 'getContainer',
      type: `() => HTMLElement | null`,
      required: '否',
      default: null,
      description: <div>设置传送挂载的位置，如果不写，会默认传送到<Code>document.body</Code>下，如果函数返回值为<Code>null</Code>，则不发生传送</div>,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="PortalProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
