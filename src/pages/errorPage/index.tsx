import { useRouteError } from 'react-router-dom';
import styles from './index.module.scss';

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string, message: string };

  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>啊哈</h1>
      <p style={{ padding: '10px' }}>好像发生了未知错误</p>
      <p style={{ padding: '10px' }}>
        详情：<i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
