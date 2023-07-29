import Title, { SubTitle } from '../../components/Title';
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

export default function Start() {
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <Title title="起步" />
      <SubTitle title="前言" />
      <p className={style.paragraph}>目前组件还不够丰富，在慢慢开发中，该项目主要用于学习使用，在生产环境推荐使用 <a href="https://ant.design/index-cn" target="_blank">Ant Design</a>、<a href="https://mui.com" target="_blank">Material UI</a> 这样成熟完备的组件库</p>
      <SubTitle title="使用 npm 或 yarn 安装" />
      <p className={style.paragraph}>推荐使用 npm 或 yarn 方式进行安装，方便调试与使用</p>
      <pre>
        <code className="language-bash" style={{ background: 'rgba(0,0,0,0.04)' }}>npm install mcxue-ui</code>
      </pre>
      <pre>
        <code className="language-bash" style={{ background: 'rgba(0,0,0,0.04)' }}>yarn add mcxue-ui</code>
      </pre>
      <SubTitle style={{ paddingTop: '30px' }} title="引入样式文件" />
      <p className={style.paragraph}>需要在项目的主入口处引入组件库的样式文件，比如在 main.tsx 中添加以下这一句</p>
      <pre>
        <code className="language-ts" style={{ background: 'rgba(0,0,0,0.04)' }}>import 'mcxue-ui/dist/style.css'</code>
      </pre>
      <SubTitle style={{ paddingTop: '30px' }} title="使用组件内 Icon" />
      <p className={style.paragraph}>如果想要组件的 Icon，需要在项目的主入口处引入 iconfont.js 文件，比如在 main.tsx 中添加以下这两句</p>
      <pre>
        <code className="language-ts" style={{ background: 'rgba(0,0,0,0.04)' }}>import addIconfont from 'mcxue-ui/dist/iconfont.js';</code>
        <code className="language-ts" style={{ background: 'rgba(0,0,0,0.04)' }}>addIconfont();</code>
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
