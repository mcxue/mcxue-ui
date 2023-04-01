import './index.scss';
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import button from './index';
import classNames from 'classnames';
import { addSuffix } from '../../src/utils';
import Icon from '../icon';

export interface ButtonProps {
  type?: 'default' | 'plain' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text';
  bgType?: 'raised' | 'smooth' | 'filled' | 'ghost';
  round?: boolean;
  bold?: boolean;
  size?: 'large' | 'small'
  icon?: string,
  iconPosition?: 'left' | 'right',
  iconStyle?: CSSProperties;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  loading?: boolean,
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLElement>,
}

export default function (props: ButtonProps) {
  const {
    type,
    bgType,
    round,
    bold,
    icon,
    iconStyle,
    iconPosition = 'left',
    className,
    style,
    children,
    loading,
    disabled,
    onClick,
    size,
  } = props;
  const buttonClassName = classNames({
    mcxueButton: true,
    [type ? addSuffix(type) : '']: true,
    [bgType ? addSuffix(bgType) : '']: true,
    mcxueRound: round,
    mcxueBold: bold,
    [size ? addSuffix(size) : '']: size,
    mcxueLoading: loading,
    mcxueDisabled: disabled,
  }, className);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && !loading && onClick(e);
  };
  const iconName = loading ? 'loading' : icon;
  const iconClassName = loading ? 'mcxueSpinning mcxueLoading' : '';
  const finalIconStyle = {
    ...iconStyle,
    marginLeft: ((icon || loading) && iconPosition === 'right' && children) ? '5px' : 0,
    marginRight: ((icon || loading) && iconPosition === 'left' && children) ? '5px' : 0,
  };
  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={handleButtonClick}
      style={style}
    >
      {
        iconName && iconPosition === 'left' && <Icon style={finalIconStyle} className={iconClassName} name={iconName} />
      }
      {children}
      {
        iconName && iconPosition === 'right' &&
        <Icon style={finalIconStyle} className={iconClassName} name={iconName} />
      }
    </button>
  );
};
