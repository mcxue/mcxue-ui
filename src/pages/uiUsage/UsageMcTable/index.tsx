import McTable from '../../../components/McTable';
import { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd';
import { mockUserInfoList, UserInfo } from '../mock';
import { useState } from 'react';

type RecordType = UserInfo;

const UsageMcFormItem = () => {
  const [dataSource] = useState(mockUserInfoList);
  const columns: ColumnsType<RecordType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      fixed: 'left',
      key: 'name',
      width: 80,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (text: number) => text === 0 ? '女' : '男',
      width: 80,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 80,
    },
    {
      title: '婚姻状况',
      dataIndex: 'married',
      key: 'married',
      render: (text) => text ? '已婚' : '未婚',
      width: 100,
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
      width: 150,
    },
    {
      title: '电子邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 180,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: '照片',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text: string) => <img alt="" src={text} />,
      width: 100,
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link" style={{ paddingTop: 0, paddingBottom: 0, height: 'auto', border: 'none' }}>查看</Button>
          <Button type="link" style={{ paddingTop: 0, paddingBottom: 0, height: 'auto', border: 'none' }}>编辑</Button>
          <Button type="link" style={{ paddingTop: 0, paddingBottom: 0, height: 'auto', border: 'none' }}>删除</Button>
        </Space>
      ),
      width: 250,
      fixed: 'right',
    },
  ];
  return (
    <McTable
      rowKey="id"
      columns={columns}
      dataSource={dataSource}
      showOrderCol
      enableResizableCol
    />
  );
};

export default UsageMcFormItem;
