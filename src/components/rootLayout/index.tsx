import CommonMenu from '../commonMenu';
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import style from './index.module.scss';
import Loading from '../loading';

export default React.memo(function RootLayout() {
  return (
    <div className={style.rootLayout}>
      <CommonMenu />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
});
