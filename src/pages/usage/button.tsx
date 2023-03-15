import Title from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo1 from '../../demo/button/demo1';
import { ReactNode } from 'react';

export default function ButtonUsage() {
  return (
    <div>
      <Title title="Button" caption="按钮" description="网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。" />
      <InstanceView
        subTitle="基本使用"
        description="Button 按钮的基本使用。包含八种类型：默认按钮、主要按钮、成功按钮、警告按钮、失败按钮、信息按钮、链接按钮、文本按钮。"
        demo={<Demo1 />}
        path="button/demo1"
      />
    </div>
  );
}
