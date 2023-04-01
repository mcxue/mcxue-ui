import Title, { SubTitle } from '../../components/title';
import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export default function ChangeLog() {
  return (
    <div>
      <Title style={{ padding: '20px 0 10px 0' }} title="更新日志" />
      <div className={styles.paragraphWrapper}>
        <p className="paragraph"><span>记录 mcxue-ui 组件库的版本更新，遵循 </span><Link to="https://semver.org/lang/zh-CN/">Semantic Versioning 2.0.0</Link> 语义化版本规范</p>
      </div>
      <SubTitle title="v0.2.0" caption="2023-04-01" />
      <div className={styles.paragraphWrapper}>
        <p>1. 新增 9 个组件：Switch、Space、Icon、Portal、Alert、Message、Tooltip、Table、Menu</p>
        <p>2. 更新 iconfont，完善项目结构</p>
      </div>
      <SubTitle title="v0.0.1" caption="2023-03-17" />
      <div className={styles.paragraphWrapper}>
        <p>初始化组件库项目框架，添加第一个 Button 组件</p>
      </div>
    </div>
  );
}
