import Title from '../../components/Title';
import InstanceView from '../../components/InstanceView';
import Demo from '../../demos/menu/demo';
import Demo2 from '../../demos/menu/demo2';
import Api from '../../demos/menu/api';

export default function Usage() {
  return (
    <div>
      <Title title="Menu" caption="菜单" description="为页面和功能提供导航的菜单列表。" />
      <InstanceView
        subTitle="代码演示"
        description="基本使用，默认竖直内嵌。"
        demo={<Demo />}
        path="menu/demo"
      />
      <InstanceView
        subTitle="水平菜单"
        description="暂且只支持一层菜单。"
        demo={<Demo2 />}
        path="menu/demo2"
      />
      <Api />
    </div>
  );
}
