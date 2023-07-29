import { SubSubTitle, SubTitle } from '../../components/Title';
import ApiTable, { ApiTableProps } from '../../components/ApiTable';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'className',
      type: `string`,
      required: '否',
      default: null,
      description: `自定义 Space 类名`,
    },
    {
      param: 'style',
      type: `CSSProperties`,
      required: '否',
      default: null,
      description: `自定义 Space 样式`,
    },
    {
      param: 'children',
      type: `ReactNode`,
      required: '是',
      default: null,
      description: `Space 的主体内容`,
    },
    {
      param: 'direction',
      type: `'horizontal' | 'vertical'`,
      required: '否',
      default: 'horizontal',
      description: `排列方向`,
    },
    {
      param: 'gap',
      type: `string`,
      required: '否',
      default: '10px',
      description: `设置间距`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="SpaceProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
