import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Tooltip from '../../../packages/tooltip';
import Icon from '../../../packages/icon';
import style from './index.module.scss';
import hljs from 'highlight.js';
import { Button } from '../../../packages';

interface Props {
  path: string;
  showButtonGroup?: boolean;
  showCopyButton?: boolean;
  showCode?: boolean;
}

export default function CodeView(props: Props) {
  const {
    path,
    showButtonGroup = true,
    showCopyButton = true,
    showCode = false,
  } = props;
  const [code, setCode] = useState('');
  const [codePanelOpen, setCodePanelOpen] = useState(showCode);
  const filePath = import.meta.env.DEV ? `/src/usageDemo/${path}.tsx?raw` : `/src/usageDemo/${path}.tsx?raw`;
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (import.meta.env.DEV) {
      import(/* @vite-ignore */ filePath).then(module => {
        setCode(module.default);
      });
    } else {
      fetch(filePath).then(res => res.text()).then(setCode);
    }
  }, [path]);

  useLayoutEffect(() => { // code 变动时候，将其代码高亮
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className={style.codeView}>
      {showButtonGroup &&
        (
          <div className={style.buttonWrapper}>
            {
              (
                <Tooltip content={codePanelOpen ? '隐藏代码' : '查看代码'}>
                  <Button
                    style={{ fontSize: '16px',  padding: '8px' }}
                    type="text"
                    onClick={() => {setCodePanelOpen(!codePanelOpen);}}
                  >
                    <Icon name="code" />
                  </Button>
                </Tooltip>
              )
            }
            {
              showCopyButton && (
                <Tooltip content="复制代码">
                  <Button style={{ fontSize: '16px', padding: '8px' }} type="text">
                    <Icon name="copy" />
                  </Button>
                </Tooltip>
              )
            }
          </div>
        )}
      <div className={style.pureCode} style={{ visibility: codePanelOpen ? 'hidden' : undefined }}>
        <pre>
          <code className="language-ts" ref={codeRef}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
