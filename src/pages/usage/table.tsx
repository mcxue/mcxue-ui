import Title from '../../components/Title';
import InstanceView from '../../components/InstanceView';
import Demo from '../../demos/table/demo';
import Api from '../../demos/table/api';

export default function Usage() {
  return (
    <div>
      <Title title="Table" caption="表格" description="展示行列数据。" />
      <InstanceView
        subTitle="代码演示"
        description="基本用法，简单设置 columns 和 dataSource 属性便可使用，并且可以设置列宽条件，自定义渲染。"
        demo={<Demo />}
        path="table/demo"
      />
      <Api />
    </div>
  );
}
