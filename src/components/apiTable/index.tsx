import { Table } from '../../../index';

interface DataItem {
  param: string;
  type: string;
  required: string;
  default: string;
  description: string;
}

type Props = {
  dataSource: DataItem[]
}

export default function ApiTable({ dataSource }: Props) {
  const codeStyle = {
    background: 'rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(5, 5, 5, 0.06)',
    borderRadius: '3px',
    padding: '0.03em 0.4em',
  };
  const columns = [
    {
      title: '参数',
      dataIndex: 'param',
      width: 100,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 300,
      render: (text: string) => (<code style={codeStyle}>{text}</code>),
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
      render: (text: string) => (<code style={codeStyle}>{text}</code>),
    },
    {
      title: '说明',
      dataIndex: 'description',
      width: 300,
    },
  ];
  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}
