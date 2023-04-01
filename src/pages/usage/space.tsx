import Title from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo from '../../demos/space/demo';
import Demo2 from '../../demos/space/demo2';
import Demo3 from '../../demos/space/demo3';
import Demo4 from '../../demos/space/demo4';
import Api from '../../demos/space/api';
import { Link } from 'react-router-dom';

export default function Usage() {
  return (
    <div>
      <Title title="Space" caption="间距" description="设置组件之间的间距。" />
      <InstanceView
        subTitle="代码演示"
        description="相邻组件水平间距。"
        demo={<Demo />}
        path="space/demo"
      />
      <InstanceView
        subTitle="垂直间距"
        description="相邻组件垂直间距。"
        demo={<Demo2 />}
        path="space/demo2"
      />
      <InstanceView
        subTitle="间距大小"
        description="通过 gap 可以自定义间距大小。"
        demo={<Demo3 />}
        path="space/demo3"
      />
      <InstanceView
        subTitle="对齐方式"
        description={<div>通过设置 styles.alignItems 设置对齐方式。该属性的详情可以看 <Link target="_blank" to="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items">MDN</Link></div>}
        demo={<Demo4 />}
        path="space/demo4"
      />
      <Api />
    </div>
  );
}
