import { SubSubTitle, SubTitle } from '../../components/title';
import ApiTable, { ApiTableProps } from '../../components/apiTable';
import Code from '../../components/code';

export default function Api() {
  const dataSource: ApiTableProps['dataSource'] = [
    {
      param: 'content',
      type: `string`,
      required: '是',
      default: null,
      description: `全局提示的内容`,
    },
    {
      param: 'type',
      type: `'info' | 'success' | 'error' | 'warning' | 'loading'`,
      required: '否',
      default: 'info',
      description: `设置不同提示类型，有 info、success、error、warning、loading`,
    },
    {
      param: 'duration',
      type: `number`,
      required: '否',
      default: '3',
      description: `持续时间，单位为秒，默认持续 3 秒`,
    },
  ];

  return (
    <div style={{ fontSize: '14px' }}>
      <SubTitle title="API 说明" />
      <SubSubTitle title="MessageConfig"
                   description={<>调用函数<Code>Message.open(messageConfig: MessageConfig)</Code>进行全局提示。</>} />
      <ApiTable dataSource={dataSource} />
      <SubSubTitle title="其他函数" />
      <p style={{ padding: '5px 0' }}>
        Message 对象上还提供了
        <Code>Message.info</Code>、
        <Code>Message.success</Code>、
        <Code>Message.error</Code>、
        <Code>Message.warning</Code>、
        <Code>Message.loading</Code>，使用这几个函数可以省略<Code>messageConfig</Code> 中的<Code>type</Code>字段。
      </p>
    </div>
  );
}
