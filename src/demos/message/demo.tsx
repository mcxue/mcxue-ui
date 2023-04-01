import { Button, Message } from 'mcxue-ui';

export default function Demo() {
  const handleClick = () => {
    Message.open({
      content: '欢迎光临～',
    });
  };
  return (
    <Button onClick={handleClick}>欢迎光临</Button>
  );
}
