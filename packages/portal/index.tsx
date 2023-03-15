/**
 * 用于将弹层组件传送到 body 下
 */
import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export function Portal({ children }: Props) {
  // const containerRef = useRef<HTMLElement | null>(null);
  // if (!containerRef.current) {
  //   containerRef.current = document.createElement('div');
  //   containerRef.current.classList.add('mcxuePortalContainer');
  //   document.body.append(containerRef.current);
  // }
  // useEffect(() => {
  //   return () => {
  //     containerRef.current?.remove();
  //   };
  // }, []);
  return createPortal(children, document.body);
}
