import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import Icon from '../../../packages/icon';
import TailInfo from '../../components/tailInfo';

const Home = () => {
  return (
    <div className={style.homeWrapper}>
      <Icon name="logo" style={{ fontSize: '100px' }} />
      <p>一套轻量级的 React UI 组件库，使用 Vite + TS 开发，体积小，响应快～</p>
      <div className="buttonGroup">
        <button><Link to="/start">快速上手</Link></button>
        <button><Link target="_blank" to="https://baidu.com">GitHub</Link></button>
      </div>
      <TailInfo />
    </div>
  );
};

export default Home;
