import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';
import Code from '../../components/code';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'prefix',
      type: `string`,
      required: '否',
      default: 'mcxue-icon-',
      description: `在项目中使用自己的 svg 图标时，可以自定义前缀，如果不写，默认使用本组件库的前缀`,
    },
    {
      param: 'name',
      type: `string`,
      required: '否',
      default: 'logo',
      description: `图标名字，如果不写，默认使用组件库中的 logo 图标`,
    },
    {
      param: 'color',
      type: `string`,
      required: '否',
      default: null,
      description: `设置图标颜色`,
    },
    {
      param: 'fontSize',
      type: `string`,
      required: '否',
      default: null,
      description: <div>设置图标大小，比如<Code>fontSize: 32px</Code>，它直接作用于 svg 标签上</div>,
    },
    {
      param: 'className',
      type: `string`,
      required: '否',
      default: null,
      description: `自定义 Icon 类名`,
    },
    {
      param: 'style',
      type: `CSSProperties`,
      required: '否',
      default: null,
      description: `自定义 Icon 样式`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="IconProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
