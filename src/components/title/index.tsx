import style from './index.module.scss';
import { ReactNode } from 'react';

interface Props {
  title: string;
  caption?: string;
  description?: ReactNode;
}

export default function Title({ title, caption = '', description = '' }: Props) {
  return (
    <>
      <h1 className={style.title}>{title}<span className={style.caption}>{caption}</span></h1>
      <p className={style.description}>{description}</p>
    </>
  );
}

interface SubTitleProps {
  subTitle: string;
  caption?: string;
  description?: ReactNode;
}

export function SubTitle({ subTitle, caption = '', description = '' }: SubTitleProps) {
  return (
    <>
      <h2 className={style.subTitle}>{subTitle}<span className={style.description}>{caption}</span></h2>
      {description ? <p className={style.description}>{description}</p> : null}
    </>
  );
}
