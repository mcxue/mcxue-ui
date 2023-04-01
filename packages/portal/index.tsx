import React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: JSX.Element;
  getContainer?: () => HTMLElement | null;
}

export default function Portal({ children, getContainer }: PortalProps) {
  if (!getContainer) return createPortal(children, document.body);
  const container = getContainer();
  return container ? createPortal(children, container) : children;
}
