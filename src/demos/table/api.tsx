import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';
import Code from '../../components/code';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'columns',
      type: `TableColumnType<RecordType>[]`,
      required: '是',
      default: null,
      description: `表格列属性`,
    },
    {
      param: 'dataSource',
      type: `RecordType[]`,
      required: '是',
      default: null,
      description: `表格源数据`,
    },
  ];
  const dataSource2: ApiTableProps['dataSource'] = [
    {
      param: 'title',
      type: `ReactNode`,
      required: '是',
      default: null,
      description: `列标题`,
    },
    {
      param: 'dataIndex',
      type: `keyof RecordType`,
      required: '是',
      default: null,
      description: <div>索引属性，通过它的值在<Code>dataSource</Code>中<Code>RecordType</Code>的每条记录中查询值</div>,
    },
    {
      param: 'width',
      type: `number`,
      required: '否',
      default: null,
      description: `设置该列的宽度占整个表格宽度比例，默认根据内容自动调节宽度`,
    },
    {
      param: 'minWidth',
      type: `string`,
      required: '否',
      default: null,
      description: <div>设置该列的最小宽度，比如<Code>200px</Code>，与<Code>maxWidth</Code>配合设置成相同的值可以固定其宽度</div>,
    },
    {
      param: 'maxWidth',
      type: `string`,
      required: '否',
      default: null,
      description: <div>设置该列的最大宽度，比如<Code>200px</Code>，与<Code>minWidth</Code>配合设置成相同的值可以固定其宽度</div>,
    },
    {
      param: 'render',
      type: `(item: RecordType[keyof RecordType], dataItem: RecordType) => ReactNode`,
      required: '否',
      default: null,
      description: `自定义单元格中的渲染`,
    },
  ];

  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="TableProps<RecordType>" />
      <ApiTable dataSource={dataSource} />
      <SubSubTitle title="TableColumnType<RecordType>" />
      <ApiTable dataSource={dataSource2} />
      <SubSubTitle title="RecordType" />
      <p style={{ paddingBottom: '5px' }}>
        <Code>RecordType</Code>的类型是这样一个对象，使用者自己定义，属性值与<Code>TableColumnType</Code>的<Code>dataIndex</Code>是一致的，默认为<Code>any</Code>，在组件内部中的约束写法是<Code>RecordType extends object = any</Code>。
      </p>
    </div>
  );
}
