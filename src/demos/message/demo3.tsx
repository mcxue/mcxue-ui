import { Button, Message, Space } from 'mcxue-ui';

export default function Demo() {
  const handleInfoClick = () => {
    Message.info({
      content: '一条普通信息～',
      duration: 0.5,
    });
  };
  const handleSuccessClick = () => {
    Message.success({
      content: '一条成功信息～',
      duration: 1,
    });
  };
  const handleWarningClick = () => {
    Message.warning({
      content: '一条警告信息～',
      duration: 3,
    });
  };
  const handleErrorClick = () => {
    Message.error({
      content: '一条错误信息～',
      duration: 5,
    });
  };
  return (
    <Space>
      <Button onClick={handleInfoClick}>0.5s 后关闭</Button>
      <Button type="success" onClick={handleSuccessClick}>1s 后关闭</Button>
      <Button type="warning" onClick={handleWarningClick}>3s 后关闭</Button>
      <Button type="error" onClick={handleErrorClick}>5s 后关闭</Button>
    </Space>
  );
}
