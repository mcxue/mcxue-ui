import { SubTitle } from '../title';
import CodeView from '../codeView';
import React, { ReactElement, ReactNode } from 'react';
import style from './index.module.scss';

interface Props {
  subTitle: string;
  caption?: string;
  description?: ReactNode;
  demo: ReactNode;
  path: string;
  showPreview?: boolean;
  showCopyButton?: boolean;
  showCode?: boolean;
}

export default function InstanceView(props: Props) {
  const { subTitle, caption, description, demo, path, showCode, showCopyButton, showPreview } = props;
  return (
    <div className={style.instanceView}>
      <SubTitle subTitle={subTitle} caption={caption} description={description} />
      <div className={style.demoViewWrapper}>
        {demo}
      </div>
      <CodeView path={path} showCode={showCode} showCopyButton={showCopyButton} showButtonGroup={showPreview} />
    </div>
  );
}
