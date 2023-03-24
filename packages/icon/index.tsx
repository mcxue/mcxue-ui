import classNames from 'classnames';
import './index.scss';
import React, { CSSProperties, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  prefix?: string;
  name?: string;
  className?: string;
  color?: string;
  style?: CSSProperties;
}

export default function Icon(props: IconProps) {
  const {
    prefix,
    name = 'logo',
    className,
    style,
    ...restProps
  } = props;
  return (
    <svg
      aria-hidden="true"
      style={style}
      className={classNames('mcxueIcon', { [className ?? '']: className })}
      {...restProps}
    >
      <use xlinkHref={`#${prefix ?? 'mcxue-icon-'}${name}`} />
    </svg>
  );
}
