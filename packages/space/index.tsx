import { CSSProperties, ReactNode } from 'react';
import './index.scss';
import classNames from 'classnames';

export interface SpaceProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: string;
}

export default function Space(props: SpaceProps) {
  const {
    className,
    style,
    children,
    direction,
    gap = '10px',
  } = props;

  const newStyle = {
    gap,
    ...style,
  };
  return (
    <div
      className={classNames('mcxueSpace', {
        [className ?? '']: className,
        mcxueVertical: direction === 'vertical',
      })}
      style={newStyle}>{children}
    </div>
  );
};
