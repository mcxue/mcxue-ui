import { Table, TableColumnType } from 'mcxue-ui';

interface RecordType {
  name: string;
  category: string;
  description: string;
}

export default function Demo() {
  const columns: TableColumnType<RecordType>[] = [
    {
      title: '菜名',
      dataIndex: 'name',
      minWidth: '72px'
    },
    {
      title: '介绍',
      dataIndex: 'description',
    },
    {
      title: '分类',
      dataIndex: 'category',
      minWidth: '64px',
    },
  ];
  const dataSource = [
    {
      name: '拔丝土豆',
      description: '拔丝土豆是一道色香味俱全的特色名菜，属于鲁菜系。',
      category: '素菜',
    },
    {
      name: '炒茄子',
      description: '家常炒茄子，简单易学，原料不复杂，其中可选项有无皆可。',
      category: '素菜',
    },
    {
      name: '黑椒牛柳',
      description: '黑椒牛柳是一道简单易做的菜。蔬菜与肉类均衡，富含蛋白质，口味适合大多数人。',
      category: '荤菜',
    },
    {
      name: '酱牛肉',
      description: '家常酱牛肉营养丰富，味道香，不论是当作主食还是佐餐都很棒。',
      category: '荤菜',
    },
    {
      name: '白灼虾',
      description: '白灼虾非常适合程序员在沿海地区做，类似于清蒸鱼：简单容错、有营养、有满足感，甚至很好看。',
      category: '水产',
    },
  ];
  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}
