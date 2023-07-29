import Title from '../../components/Title';
import InstanceView from '../../components/InstanceView';
import Demo from '../../demos/message/demo';
import Demo2 from '../../demos/message/demo2';
import Demo3 from '../../demos/message/demo3';
import Api from '../../demos/message/api';

export default function Usage() {
  return (
    <div>
      <Title title="Message" caption="全局提示" description="全局展示操作反馈信息。" />
      <InstanceView
        subTitle="代码演示"
        description="基本使用，调用 Message.open(messageConfig: MessageConfig) 函数。"
        demo={<Demo />}
        path="message/demo"
      />
      <InstanceView
        subTitle="不同类型的提示"
        description="有五种不同类型的提示，调用 Message 下不同的函数。"
        demo={<Demo2 />}
        path="message/demo2"
      />
      <InstanceView
        subTitle="持续时间"
        description="通过 duration 设置持续时间。"
        demo={<Demo3 />}
        path="message/demo3"
      />
      <Api />
    </div>
  );
}
