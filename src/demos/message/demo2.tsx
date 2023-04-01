import { Button, Message, Space } from 'mcxue-ui';

export default function Demo() {
  const handleInfoClick = () => {
    Message.info({
      content: '一条普通信息～',
    });
  };
  const handleSuccessClick = () => {
    Message.success({
      content: '一条成功信息～',
    });
  };
  const handleWarningClick = () => {
    Message.warning({
      content: '一条警告信息～',
    });
  };
  const handleErrorClick = () => {
    Message.error({
      content: '一条错误信息～',
    });
  };
  const handleLoadingClick = () => {
    Message.loading({
      content: '加载中～',
    });
  };
  return (
    <Space>
      <Button onClick={handleInfoClick}>信息</Button>
      <Button type="success" onClick={handleSuccessClick}>成功</Button>
      <Button type="warning" onClick={handleWarningClick}>警告</Button>
      <Button type="error" onClick={handleErrorClick}>错误</Button>
      <Button type="info" onClick={handleLoadingClick}>加载中</Button>
    </Space>
  );
}
