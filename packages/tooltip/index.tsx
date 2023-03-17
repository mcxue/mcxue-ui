import React, { ReactElement, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { Portal } from '../portal';
import './index.scss';

// todo 暂时只支持水平中间，垂直上面的位置
const getAbsolutePosition = (triggerRef: RefObject<HTMLElement>, tooltipRef: RefObject<HTMLElement>) => {
  const triggerRect = triggerRef.current?.getBoundingClientRect();
  const tooltipRect = tooltipRef.current?.getBoundingClientRect();
  if (!triggerRect || !tooltipRect) return { left: 0, top: 0 };
  const left = triggerRect.left + triggerRect.width / 2 + -tooltipRect.width / 2;
  const top = (triggerRect.top || 0) - (tooltipRect.height || 0);
  return { left, top };
};

interface Props {
  children: ReactElement;
  content?: ReactNode;
  arrow?: boolean;
}

export default function Tooltip(props: Props) {
  const { children, content } = props;
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      const absolutePosition = getAbsolutePosition(triggerRef, tooltipRef);
      setPosition(absolutePosition);
    }
  }, [show]);
  return (
    <div
      className="mcxueTooltipTrigger"
      ref={triggerRef}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
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
              <div className="mcxueTooltip">
                {content}
              </div>
              <div className="mcxueArrow" />
            </div>
          </Portal>
        )
      }
    </div>
  );
}
