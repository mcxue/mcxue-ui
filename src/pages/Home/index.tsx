import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import TailInfo from '../../components/TailInfo';
import { Button } from 'mcxue-ui';

const Home = () => {
  return (
    <div className={style.homeWrapper}>
      <div />
      <div className={style.homeMain}>
        <h1 className={style.title}>Mcxue UI</h1>
        <p>一套轻量级的 React UI 组件库</p>
        <p>使用 Vite + TS + React18 开发，体积小，响应快</p>
        <div className={style.buttonWrapper}>
          <Link to="/components/start">
            <Button className={style.button} type="plain">快速上手</Button>
          </Link>
          <Link target="_blank" to="https://github.com/mcxue/mcxue-ui">
            <Button className={style.button} bgType="filled">Github</Button>
          </Link>
        </div>
      </div>
      <TailInfo />
    </div>
  );
};

export default Home;
