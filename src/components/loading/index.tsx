import { Icon } from 'mcxue-ui';
import style from './index.module.scss';

export default function Loading() {
  return (
    <div className={style.loading}>
      <Icon className={style.icon} name="loading" />
    </div>
  );
};
