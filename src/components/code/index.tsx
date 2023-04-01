import styles from './index.module.scss';
import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Code(props: Props) {
  return <code style={props.style} className={styles.code}>{props.children}</code>;
}
