import Title from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo from '../../demos/switch/demo';
import Demo2 from '../../demos/switch/demo2';
import Demo3 from '../../demos/switch/demo3';
import Demo4 from '../../demos/switch/demo4';
import Api from '../../demos/switch/api';

export default function Usage() {
  return (
    <div>
      <Title title="Switch" caption="开关" description="开关选择器，表示开关状态/两种状态之间的切换时使用。" />
      <InstanceView
        subTitle="代码演示"
        description="基本用法。"
        demo={<Demo />}
        path="switch/demo"
      />
      <InstanceView
        subTitle="文字和图标"
        description="通过 checkedTextNode 和 unCheckedTextNode 属性可以自定义显示的文字和图标。"
        demo={<Demo2 />}
        path="switch/demo2"
      />
      <InstanceView
        subTitle="加载中"
        description="设置加载状态，此时处于不可用状态。"
        demo={<Demo3 />}
        path="switch/demo3"
      />
      <InstanceView
        subTitle="禁用"
        description="不可用状态。"
        demo={<Demo4 />}
        path="switch/demo4"
      />
      <Api />
    </div>
  );
}
