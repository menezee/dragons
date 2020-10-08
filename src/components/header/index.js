import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from '../../contexts/auth';

import styles from './header.module.scss';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <span>
        Hello, { user?.username ?? 'anonymous' }
      </span>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faDragon}
        opacity='0.2'
        size='2x'
      />
    </header>
  );
}

export { Header, };
