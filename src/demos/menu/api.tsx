import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';
import Code from '../../components/code';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'mode',
      type: `'inline' | 'horizontal'`,
      required: '否',
      default: 'inline',
      description: `菜单样式类型，目前仅支持两种类型，内嵌式 inline 和水平式 horizontal`,
    },
    {
      param: 'items',
      type: `MenuItem[]`,
      required: '是',
      default: null,
      description: `定义菜单数据`,
    },
    {
      param: 'selectedKeys',
      type: `MenuItemTypeKey`,
      required: '否',
      default: null,
      description: `选中的菜单的 Key，选中的菜单样式会更突出`,
    },
    {
      param: 'onClick',
      type: `(e: { keys: string[], type: MenuItemType }) => void`,
      required: '否',
      default: null,
      description: `点击菜单中任意项时的回调，会返回菜单项的 keys 及类型`,
    },
  ];
  const dataSource2 = [
    {
      param: 'label',
      type: `ReactNode`,
      required: '否',
      default: null,
      description: `菜单项的标题`,
    },
    {
      param: 'key',
      type: `string | number`,
      required: '否',
      default: null,
      description: `菜单项的 key`,
    },
    {
      param: 'children',
      type: `MenuItem[]`,
      required: '否',
      default: null,
      description: `在 children 上定义子菜单`,
    },
    {
      param: 'type',
      type: `MenuItemType`,
      required: '否',
      default: null,
      description: `菜单项类型`,
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="MenuProps" />
      <ApiTable dataSource={dataSource} />
      <SubSubTitle title="MenuItem" />
      <ApiTable dataSource={dataSource2} />
      <SubSubTitle title="MenuItemTypeKey" />
      <p style={{ paddingBottom: '5px' }}>
        <Code>string[] | string</Code>是 MenuItemTypeKey 的类型，用于确定一个菜单项，
        <Code>string[]</Code>的形式如下：
        <Code>['0','2','1']</Code>，
        <Code>string</Code>的形式如下：
        <Code>'0.2.1'</Code>。
      </p>
      <SubSubTitle title="MenuItemType" />
      <p style={{ paddingBottom: '5px' }}>
        <Code>'default' | 'category' | 'group' </Code>是菜单项的类型，一般不必主动设置<Code>'default' | 'category'</Code>，
        当菜单项无<Code>'children'</Code>属性时， 它的类型是<Code>'default'</Code>，
        当菜单项有<Code>'children'</Code>属性时， 它的类型是<Code>'category'</Code>，
        将它定义为<Code>'group'</Code>时， 表示它是个组，意思是不能被选中。
      </p>
    </div>
  );
}
