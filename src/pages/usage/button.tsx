import Title from '../../components/Title';
import InstanceView from '../../components/InstanceView';
import Demo from '../../demos/button/demo';
import Demo2 from '../../demos/button/demo2';
import Demo3 from '../../demos/button/demo3';
import Demo4 from '../../demos/button/demo4';
import Demo5 from '../../demos/button/demo5';
import Demo6 from '../../demos/button/demo6';
import Demo7 from '../../demos/button/demo7';
import Api from '../../demos/button/api';

export default function Usage() {
  return (
    <div>
      <Title title="Button" caption="按钮" description="网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。" />
      <InstanceView
        subTitle="代码演示"
        description="基本使用，包含八种不同的类型：默认按钮、朴素按钮、成功按钮、警告按钮、失败按钮、信息按钮、链接按钮、文本按钮。"
        demo={<Demo />}
        path="button/demo"
      />
      <InstanceView
        subTitle="按钮样式"
        description="通过 bgType 属性可以调节四种不同样式的按钮，这是对默认按钮类型的补充，底色以为蓝色为主。如果使用其他类型按钮，颜色会不协调。"
        demo={<Demo2 />}
        path="button/demo2"
      />
      <InstanceView
        subTitle="圆角按钮"
        description="通过 round 属性调整按钮的圆角状态。"
        demo={<Demo3 />}
        path="button/demo3"
      />
      <InstanceView
        subTitle="按钮尺寸、文字粗细"
        description="通过 size 和 bold 属性可以设置按钮尺寸与文字粗细。若不设置，则是默认的大小和粗细。"
        demo={<Demo4 />}
        path="button/demo4"
      />
      <InstanceView
        subTitle="图标按钮"
        description="通过 icon 属性可以给按钮添加，iconPosition 属性来设置位置。"
        demo={<Demo5 />}
        path="button/demo5"
      />
      <InstanceView
        subTitle="加载中状态"
        description="通过 loading 属性可以添加加载中状态。"
        demo={<Demo6 />}
        path="button/demo6"
      />
      <InstanceView
        subTitle="禁用状态"
        description="通过 disabled 属性可以添加禁用状态。"
        demo={<Demo7 />}
        path="button/demo7"
      />
      <Api />
    </div>
  );
}
