import Title, { SubTitle } from '../../components/title';
import InstanceView from '../../components/instanceView';
import Demo from '../../demos/icon/demo';
import Demo2 from '../../demos/icon/demo2';
import Demo3 from '../../demos/icon/demo3';
import Api from '../../demos/icon/api';
import { Link } from 'react-router-dom';
import { Button, Icon, Message, Space } from '../../../index';

const iconNameList = [
  'logo', 'github', 'npm', 'google', 'bing', 'baidu', 'yuque', 'settings', 'scan', 'search', 'loading',
  'copy', 'edit', 'add', 'add-btn', 'right-arrow', 'right', 'left-arrow', 'left', 'code', 'selected', 'close',
  'warning', 'success', 'info', 'error', 'warning-fill', 'success-fill', 'info-fill', 'error-fill',
];

const IconDisplay = (props: { name: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '84px', height: '84px' }}>
      <Icon fontSize="48px" name={props.name} />
      <Button type="text" style={{ padding: '8px 0 0 0' }} onClick={() => {
        window.navigator.clipboard.writeText(props.name).then(() => {
          Message.success({ content: `复制 ${props.name} 成功` });
        }).catch((e) => {
          Message.error({ content: e });
        });
      }}>{props.name}</Button>
    </div>
  );
};

export default function Usage() {
  return (
    <div>
      <Title title="Icon" caption="图标"
             description={<div>语义化的矢量图形。使用组件内图标需要引入 js 包，用法看<Link to="/start/install">"起步"</Link>章节</div>} />
      <InstanceView
        subTitle="代码演示"
        description="基本使用，使用 name 属性选择图标。"
        demo={<Demo />}
        path="icon/demo"
      />
      <InstanceView
        subTitle="颜色"
        description="通过 color 设置颜色。"
        demo={<Demo2 />}
        path="icon/demo2"
      />
      <InstanceView
        subTitle="大小"
        description="通过 fontSize 设置大小。"
        demo={<Demo3 />}
        path="icon/demo3"
      />
      <SubTitle title="组件库内的图标" />
      <Space style={{ paddingTop: '8px' }}>
        {iconNameList.map((name, index) => <IconDisplay key={index} name={name} />)}
      </Space>
      <Api />
    </div>
  );
}
