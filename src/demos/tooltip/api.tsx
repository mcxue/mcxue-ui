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
      description: `主内容`,
    },
    {
      param: 'content',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: `文字提示`,
    },
    {
      param: 'arrow',
      type: `boolean`,
      required: '否',
      default: 'true',
      description: `显示箭头`,
    },
    {
      param: 'placement',
      type: `'top' | 'left' | 'right' | 'bottom'`,
      required: '否',
      default: 'top',
      description: `气泡框位置，可以设置上、下、左、右`,
    },
    {
      param: 'offset',
      type: `number`,
      required: '否',
      default: '6',
      description: <div>气泡框偏移量，单位是<Code>px</Code>，正值远离主内容，负值靠近主内容</div>,
    },
    {
      param: 'color',
      type: `string`,
      required: '否',
      default: null,
      description: `背景色`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="TooltipProps" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
