import { SubTitle } from '../../components/title';
import ApiTable from '../../components/apiTable';

export function Api() {
  const dataSource = [
    {
      param: 'type',
      type: `'default' | 'plain' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text'`,
      required: '否',
      default: 'default',
      description: `设置按钮类型，有八种，默认是 default 类型`
    },
    {
      param: 'bgType',
      type: `'raised' ｜ 'smooth' | 'filled' | 'ghost'`,
      required: '否',
      default: 'raised',
      description: `设置按钮样式，对 'type=default' 按钮的样式补充，使用它时 type 属性就不要设置为其他值了`,
    },
    {
      param: 'round',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '设置是否给按钮添加圆角，默认不添加圆角',
    },
    {
      param: 'bold',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '是否需要对按钮框中的字体进行加粗，默认不加粗',
    },
    {
      param: 'size',
      type: `'medium' 'large' | 'small'`,
      required: '否',
      default: 'medium',
      description: '设置三种不同类型的按钮，默认是中等大小',
    },
    {
      param: 'icon',
      type: `string`,
      required: '否',
      default: 'logo',
      description: '设置按钮图标，添加组件库内置的 icon，目前暂未完善整理常用 icon 图标，未来会说明',
    },
    {
      param: 'iconPosition',
      type: `'left' | 'right'`,
      required: '否',
      default: 'left',
      description: '设置图标的位置，左边还是右边，暂不支持上下',
    },
    {
      param: 'iconStyle',
      type: `CSSProperties`,
      required: '否',
      default: '{}',
      description: '设置图标的样式，组件库使用的 Symbol 方式引入图标，所以对于它的样式，fontSize 能设置其大小，color 能设置它的颜色',
    },
    {
      param: 'className',
      type: `string`,
      required: '否',
      default: '{}',
      description: '在 button 上添加 className，然后自定义按钮样式',
    },
    {
      param: 'styles',
      type: `CSSProperties`,
      required: '否',
      default: '{}',
      description: '另一种自定义按钮样式的方式',
    },
    {
      param: 'children',
      type: `ReactNode`,
      required: '否',
      default: 'undefined',
      description: '按钮内容',
    },
    {
      param: 'loading',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '加载中状态',
    },
    {
      param: 'disabled',
      type: `boolean`,
      required: '否',
      default: 'false',
      description: '不可用状态',
    },
    {
      param: 'onClick',
      type: `MouseEventHandler<HTMLElement>`,
      required: '否',
      default: 'undefined',
      description: '点击事件',
    },
  ];
  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle subTitle="API 说明" />
      <ApiTable dataSource={dataSource} />
    </div>
  );
}
