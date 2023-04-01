import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import Portal from '../portal';
import './index.scss';
import classNames from 'classnames';

const getAbsolutePosition = (triggerRef: RefObject<HTMLElement>, tooltipRef: RefObject<HTMLElement>, position: TooltipPosition, offset: number) => {
  const triggerRect = triggerRef.current?.getBoundingClientRect();
  const tooltipRect = tooltipRef.current?.getBoundingClientRect();
  if (!triggerRect || !tooltipRect) return { left: 0, top: 0 };
  let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
  let top = triggerRect.top - tooltipRect.height - offset;
  if (position === 'left') {
    left = triggerRect.left - tooltipRect.width - offset;
    top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
  } else if (position === 'right') {
    left = triggerRect.left + triggerRect.width + offset;
    top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
  } else if (position === 'bottom') {
    left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    top = triggerRect.top + triggerRect.height + offset;
  }
  return { left, top };
};

type TooltipPosition = 'top' | 'left' | 'right' | 'bottom'

export interface TooltipProps {
  children: ReactNode;
  content?: ReactNode;
  arrow?: boolean;
  placement?: TooltipPosition;
  offset?: number;
  color?: string;
}

export default function Tooltip(props: TooltipProps) {
  const { children, content, placement, offset = 6, arrow = true, color } = props;
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      const absolutePosition = getAbsolutePosition(triggerRef, tooltipRef, placement ?? 'top', offset ?? 0);
      setPosition(absolutePosition);
    }
  }, [show]);
  return (
    <div
      className="mcxueTooltipTrigger"
      ref={triggerRef}
      onMouseEnter={() => {setShow(true);}}
      onMouseLeave={() => {setShow(false);}}
    >
      {children}
      {
        show && (
          <Portal>
            <div
              style={{ left: position.left, top: position.top }}
              ref={tooltipRef}
              className="mcxueTooltipContainer"
            >
              <div className="mcxueTooltip" style={{ background: color }}>{content}</div>
              {
                arrow && (
                  <div style={{ background: color }} className={classNames('mcxueArrow', {
                    mcxueLeft: placement === 'left',
                    mcxueRight: placement === 'right',
                    mcxueBottom: placement === 'bottom',
                  })} />
                )
              }
            </div>
          </Portal>
        )
      }
    </div>
  );
}
