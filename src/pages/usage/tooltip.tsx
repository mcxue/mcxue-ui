import Title from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo from '../../demos/tooltip/demo';
import Demo2 from '../../demos/tooltip/demo2';
import Demo3 from '../../demos/tooltip/demo3';
import Demo4 from '../../demos/tooltip/demo4';
import Api from '../../demos/tooltip/api';

export default function Usage() {
  return (
    <div>
      <Title title="Tooltip" caption="文字提示" description="简单的文字提示气泡框。" />
      <InstanceView
        subTitle="代码演示"
        description="基本使用。"
        demo={<Demo />}
        path="tooltip/demo"
      />
      <InstanceView
        subTitle="不同的弹出位置"
        description="通过 placement 设置不同的弹出位置。"
        demo={<Demo2 />}
        path="tooltip/demo2"
      />
      <InstanceView
        subTitle="箭头与偏移"
        description="可以隐藏箭头，还可以设置气泡框的偏移量。"
        demo={<Demo3 />}
        path="tooltip/demo3"
      />
      <InstanceView
        subTitle="背景色"
        description="设置气泡框的背景色。"
        demo={<Demo4 />}
        path="tooltip/demo4"
      />
      <Api />
    </div>
  );
}
