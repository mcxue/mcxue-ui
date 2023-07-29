import Title from '../../components/Title';
import InstanceView from '../../components/InstanceView';
import Demo from '../../demos/portal/demo';
import Api from '../../demos/portal/api';

export default function Usage() {
  return (
    <div>
      <Title title="Portal" caption="传送门" description="将 ReactNode 传送到其他 HTMLElement 下。" />
      <InstanceView
        subTitle="代码演示"
        description="基本用法。"
        demo={<Demo />}
        path="portal/demo"
      />
      <Api />
    </div>
  );
}
