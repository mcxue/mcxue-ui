import ReactDOM from 'react-dom/client';
import Icon from '../icon';
import './index.scss';
import classNames from 'classnames';

type MessageType = 'info' | 'success' | 'error' | 'warning' | 'loading'

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

export interface MessageInnerProps {
  type?: MessageType;
  content?: string;
}

const MessageInner = (props: MessageInnerProps) => {
  const { type = 'info', content = '' } = props;
  return <div className={classNames(
    'mcxueMessage', {
      mcxueInfo: type === 'info',
      mcxueSuccess: type === 'success',
      mcxueError: type === 'error',
      mcxueWarning: type === 'warning',
      mcxueLoading: type === 'loading',
    },
  )}><Icon name={type === 'loading' ? type : type + '-fill'} />{content}</div>;
};

export interface MessageConfig {
  content: string;
  type?: MessageType;
  duration?: number;
}

const Message = {
  open: (messageConfig: MessageConfig) => {
    const {
      content,
      duration = 3,
      type = 'info',
    } = messageConfig;
    const messageWrapper = createMessageWrapper();
    const root = ReactDOM.createRoot(messageWrapper as HTMLElement);
    root.render(<MessageInner type={type} content={content} />);
    setTimeout(() => {
      root.unmount();
      messageWrapper.remove();
    }, (duration ?? 3) * 1000);
  },
  info: ({ content, duration }: MessageConfig) => Message.open({ content, duration, type: 'info' }),
  success: ({ content, duration }: MessageConfig) => Message.open({ content, duration, type: 'success' }),
  error: ({ content, duration }: MessageConfig) => Message.open({ content, duration, type: 'error' }),
  warning: ({ content, duration }: MessageConfig) => Message.open({ content, duration, type: 'warning' }),
  loading: ({ content, duration }: MessageConfig) => Message.open({ content, duration, type: 'loading' }),
};

export default Message;
