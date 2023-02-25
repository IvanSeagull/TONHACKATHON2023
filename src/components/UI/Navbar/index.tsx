import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  // @ts-ignore
  const tg = window.Telegram.WebApp;
  return (
    <div className={styles.wrapper}>
      <div>Logo</div>
      <div className={styles.row}>
        <Link to="/jobs">
          <p>jobs</p>
        </Link>
        <Link to="/profile">
          <p>123</p>
        </Link>
        <Link to="/profile">
          <p>profile</p>
          <p>{tg.initDataUnsafe?.user?.username}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
