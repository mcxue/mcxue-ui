import { Table, TableColumnType } from 'mcxue-ui';
import Code from '../Code';

interface RecordType {
  param: string;
  type: string;
  required: string;
  default?: string | null | undefined;
  description: JSX.Element | string | number;
}

export type ApiTableProps = {
  dataSource: RecordType[];
}

export default function ApiTable({ dataSource }: ApiTableProps) {
  const columns: TableColumnType<RecordType>[] = [
    {
      title: '参数',
      dataIndex: 'param',
      width: 100,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 300,
      render: (text) => (<Code>{text}</Code>),
    },
    {
      title: '必填',
      dataIndex: 'required',
      width: 100,
      minWidth: '62px',
      maxWidth: '62px',
    },
    {
      title: '默认值',
      dataIndex: 'default',
      width: 100,
      minWidth: '86px',
      render: (text) => (
        text ? <Code>{text}</Code> : <span style={{ padding: '0.03em 0.4em' }}>-</span>
      ),
    },
    {
      title: '说明',
      dataIndex: 'description',
      width: 300,
    },
  ];
  return (
    <Table<RecordType> columns={columns} dataSource={dataSource} />
  );
}
