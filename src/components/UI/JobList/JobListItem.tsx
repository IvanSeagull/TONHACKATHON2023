import React from 'react';
import SkillComponent from '../../SkillComponent';

import styles from './JobList.module.scss';

const tags = ['Func', 'Very fun c', 'React', 'Nest.js'];

const JobListItem = () => {
  return (
    <div className={styles.wrapperItem}>
      <div className={styles.header}>
        <p className={styles.company}>
          Job by <span>Microsoft</span> | 2hr ago
        </p>
        <div className={styles.priceCon}>
          <p className={styles.priceTxt}>$100</p>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>Make a logo for Microsoft.</h3>
        <p className={styles.description}>
          Fusce quam leo, congue in libero sit amet, tincidunt pretium neque. Nullam hendrerit orci
          at ornare dignissim...
        </p>

        <div className={styles.appliedCon}>
          <p>14 Applied</p>
        </div>
      </div>

      {/* <div className={styles.line} />
      <div className={styles.tagsCon}>
        {tags.map((tag, index) => (
          <SkillComponent key={index} value={tag} />
        ))}
      </div> */}
    </div>
  );
};

export default JobListItem;
