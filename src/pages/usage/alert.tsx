import Title from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo from '../../demos/alert/demo';
import Demo2 from '../../demos/alert/demo2';
import Demo3 from '../../demos/alert/demo3';
import Demo4 from '../../demos/alert/demo4';
import Demo5 from '../../demos/alert/demo5';
import Demo6 from '../../demos/alert/demo6';
import Api from '../../demos/alert/api';

export default function Usage() {
  return (
    <div>
      <Title title="Alert" caption="警告提示" description="警告提示，展现需要关注的信息。" />
      <InstanceView
        subTitle="代码演示"
        description="最基本的用法，适用于简短的警告提示。"
        demo={<Demo />}
        path="alert/demo"
      />
      <InstanceView
        subTitle="四种样式"
        description="共有四种样式 success、info、warning、error。"
        demo={<Demo2 />}
        path="alert/demo2"
      />
      <InstanceView
        subTitle="可关闭的警告提示"
        description="显示关闭按钮，点击可关闭警告提示。"
        demo={<Demo3 />}
        path="alert/demo3"
      />
      <InstanceView
        subTitle="含有辅助性文字介绍"
        description="含有辅助性文字介绍的警告提示。"
        demo={<Demo4 />}
        path="alert/demo4"
      />
      <InstanceView
        subTitle="图标与自定义图标"
        description="带图标的警告信息提示。"
        demo={<Demo5 />}
        path="alert/demo5"
      />
      <InstanceView
        subTitle="自定义关闭"
        description="可以自定义关闭，自定义的文字会替换原先的关闭。"
        demo={<Demo6 />}
        path="alert/demo6"
      />
      <Api />
    </div>
  );
}
