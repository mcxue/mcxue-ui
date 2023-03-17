import ReactDOM from 'react-dom/client';
import Icon from '../icon';
import './index.scss';
import classNames from 'classnames';

type MessageType = 'info' | 'success' | 'fail' | 'warning'

const createMessageContainer = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('mcxueMessageContainer');
  document.body.append(messageContainer);
  return messageContainer;
};

const createMessageWrapper = () => {
  let messageContainer = document.querySelector('.mcxueMessageContainer');
  if (!messageContainer) {
    messageContainer = createMessageContainer();
  }
  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('mcxueMessageWrapper');
  messageContainer!.append(messageWrapper);
  return messageWrapper;
};

interface Props {
  type?: MessageType;
  content?: string;
}

const MessageInner = (props: Props) => {
  const { type = 'info', content = '' } = props;
  return <div className={classNames(
    'mcxueMessage', {
      mcxueInfo: type === 'info',
      mcxueSuccess: type === 'success',
      mcxueFail: type === 'fail',
      mcxueWarning: type === 'warning',
    },
  )}><Icon name={type} />{content}</div>;
};

const createMessageFn = (type: MessageType) => {
  return (content: string, time?: number) => {
    const messageWrapper = createMessageWrapper();
    const root = ReactDOM.createRoot(messageWrapper as HTMLElement);
    root.render(<MessageInner type={type} content={content} />);
    setTimeout(() => {
      root.unmount();
      messageWrapper.remove();
    }, (time ?? 3) * 1000);
  };
};

const Message = {
  info: createMessageFn('info'),
  success: createMessageFn('success'),
  fail: createMessageFn('fail'),
  warning: createMessageFn('warning'),
};

export default Message;
