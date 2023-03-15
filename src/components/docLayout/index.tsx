import React, { useEffect, useState, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NAV_DATA } from './constants';
import style from './index.module.scss';

const Nav = () => {
  return (
    <ul>
      {NAV_DATA.map((group, index) => {
        return (
          <li key={index}>
            <h3>{group.groupName}</h3>
            <ol>
              {
                group.children.map((nav, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={nav.link}>{nav.label}</NavLink>
                    </li>
                  );
                })
              }
            </ol>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(function DocLayout() {
  const [menuInfo, setMenuInfo] = useState();
  return (
    <div className={style.docLayout}>
      <Nav />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
});

