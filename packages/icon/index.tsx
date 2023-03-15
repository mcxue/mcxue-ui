import classNames from 'classnames';
import './index.scss';
import React, { CSSProperties, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  prefix?: string;
  name?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Icon(props: Props) {
  const {
    className,
    name = 'logo',
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
      <use xlinkHref={`#mcxue-icon-${name}`} />
    </svg>
  );
}
