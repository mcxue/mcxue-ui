import { CSSProperties, ReactNode } from 'react';
import './index.scss';

export interface SpaceProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Space({ children, style }: SpaceProps) {
  return <div style={style} className="mcxueSpace">{children}</div>;
};
