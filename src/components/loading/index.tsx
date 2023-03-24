import Icon from '../../../packages/icon';
import style from './index.module.scss';

export default function Loading() {
  return (
    <div className={style.loading}>
      <Icon className={style.icon} name="loading" />
    </div>
  );
};
