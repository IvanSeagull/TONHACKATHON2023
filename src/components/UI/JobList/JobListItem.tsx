import React from 'react';

import styles from './JobList.module.scss';

const JobListItem = () => {
  return (
    <div className={styles.wrapperItem}>
      <div className={styles.header}>
        <h2>Username</h2>
        <p>price</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis voluptas
        corrupti.
      </p>
    </div>
  );
};

export default JobListItem;
