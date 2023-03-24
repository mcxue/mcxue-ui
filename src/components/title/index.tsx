import styles from './index.module.scss';
import { CSSProperties, ReactNode } from 'react';

interface Props {
  title: string;
  caption?: string;
  description?: ReactNode;
  style?: CSSProperties;
}

export default function Title({ title, caption = '', description = '', style }: Props) {
  return (
    <>
      <h1 style={style} className={styles.title}>{title}<span className={styles.caption}>{caption}</span></h1>
      {description ? <p className={styles.description}>{description}</p> : null}
    </>
  );
}

interface SubTitleProps {
  title: string;
  caption?: string;
  description?: ReactNode;
  style?: CSSProperties;
}

export function SubTitle({ title, caption = '', description = '', style }: SubTitleProps) {
  return (
    <>
      <h2 style={style} className={styles.subTitle}>{title}<span className={styles.caption}>{caption}</span></h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </>
  );
}
