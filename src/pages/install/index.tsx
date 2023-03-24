import Title, { SubTitle } from '../../components/title';
import React, { useLayoutEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import style from './index.module.scss';

hljs.registerLanguage('bash', (hljs) => {
  const result = bash(hljs);
  // @ts-ignore
  result.keywords.built_in.push('npm', 'yarn', 'install', 'add');
  return result;
});
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

export default function Install() {
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div>
      <Title title="起步" />
      <SubTitle title="使用 npm 或 yarn 安装" />
      <p className={style.paragraph}>推荐使用 npm 或 yarn 方式进行安装，方便调试与使用</p>
      <pre>
        <code className="language-bash" style={{ background: 'rgba(0,0,0,0.04)' }}>npm install mcxue-ui</code>
      </pre>
      <pre>
        <code className="language-bash" style={{ background: 'rgba(0,0,0,0.04)' }}>yarn add mcxue-ui</code>
      </pre>
      <SubTitle style={{ paddingTop: '30px' }} title="使用示例" />
      <p className={style.paragraph}>这是一个简单使用按钮组件的示例</p>
      <pre>
        <code style={{ background: 'rgba(0,0,0,0.04)' }}>
          {`import React from 'react';
import { Button } from 'mcxue-ui';
import { Space } from 'mcxue-ui';

export default function Demo() {
  return (
    <Space>
      <Button>默认按钮</Button>
    </Space>
  );
}`}
        </code>
      </pre>
      <SubTitle style={{ paddingTop: '30px' }} title="按需加载" />
      <p className={style.paragraph}>mcxue-ui 默认支持基于 ES modules 的 tree shaking</p>
      <SubTitle style={{ paddingTop: '30px' }} title="TypeScript" />
      <p className={style.paragraph}>mcxue-ui 使用 TypeScript 进行书写并提供了完整的定义文件</p>
    </div>
  );
};
