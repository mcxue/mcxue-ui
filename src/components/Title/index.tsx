import styles from './index.module.scss';
import { CSSProperties, ReactNode } from 'react';

interface TitleProps {
  title: string;
  caption?: string;
  description?: ReactNode;
  style?: CSSProperties;
}

export default function Title({ title, caption = '', description = '', style }: TitleProps) {
  return (
    <>
      <h1 style={style} className={styles.title}>{title}<span className={styles.caption}>{caption}</span></h1>
      {description ? <div className={styles.description}>{description}</div> : null}
    </>
  );
}

export function SubTitle({ title, caption = '', description = '', style }: TitleProps) {
  return (
    <>
      <h2 style={style} className={styles.subTitle}>{title}<span className={styles.caption}>{caption}</span></h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </>
  );
}

export function SubSubTitle({ title, caption = '', description = '', style }: TitleProps) {
  return (
    <>
      <h3 style={style} className={styles.subSubTitle}>{title}<span className={styles.caption}>{caption}</span></h3>
      {description ? <p className={styles.description}>{description}</p> : null}
    </>
  );
}
