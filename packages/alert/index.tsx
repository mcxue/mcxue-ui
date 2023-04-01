import React, { ReactNode, useState } from 'react';
import './index.scss';
import classNames from 'classnames';
import { Icon } from '../../index';

export interface AlertProps {
  message: ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
  showIcon?: boolean;
  description?: ReactNode;
  closable?: boolean;
  closeIcon?: ReactNode;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Alert(props: AlertProps) {
  const {
    message,
    type = 'info',
    showIcon,
    description,
    closable,
    closeIcon,
    onClose,
  } = props;
  const [show, setShow] = useState(true);
  const iconName = type === 'error' ? 'error-fill'
    : type === 'info' ? 'info-fill'
      : type === 'warning' ? 'warning'
        : 'success-fill';
  if (!show) return null;
  return (
    <div className={classNames('mcxueAlert', {
      mcxueError: type === 'error',
      mcxueWarning: type === 'warning',
      mcxueSuccess: type === 'success',
      mcxueWithDescription: description,
    })}>
      {showIcon ? <Icon className={classNames('mcxueAlertIcon')} name={iconName} /> : null}

      {!description ? <span className="mcxueAlertTitle">{message}</span> : null}
      {description ? (
        <div>
          <span className="mcxueAlertTitle">{message}</span>
          <div className="mcxueAlertDescription">{description}</div>
        </div>
      ) : null}
      {closable ?
        <div className="mcxueAlertCloseIcon" onClick={(e) => {
          onClose?.(e);
          setShow(false);
        }}>
          {closeIcon ? closeIcon : <Icon name="close" />}
        </div> : null
      }
    </div>
  );
}
