import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'message',
      type: `ReactNode`,
      required: '是',
      default: null,
      description: `警告提示内容`,
    },
    {
      param: 'type',
      type: `'info' ｜ 'success' | 'warning' | 'ghost'`,
      required: '否',
      default: 'info',
      description: `指定警告提示的样式，有四种`,
    },
    {
      param: 'showIcon',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '是否显示图标',
    },
    {
      param: 'description',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: '辅助性文字介绍',
    },
    {
      param: 'closable',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '是否显示关闭按钮',
    },
    {
      param: 'closeIcon',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: '自定义关闭按钮，会替换原来的关闭，在 closable 为 true 时有效',
    },
    {
      param: 'onClose',
      type: `(e: React.MouseEvent<HTMLDivElement>) => void`,
      required: '否',
      default: null,
      description: '关闭时触发的回调函数',
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="AlertProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
