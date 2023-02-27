import React from 'react';
import { FlexBoxCol, FlexBoxRow } from '../../styled/styled';

import styles from './JobList.module.scss';
import JobListItem from './JobListItem';

const JobList = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <FlexBoxCol>
            <JobListItem />
            <JobListItem />
            <JobListItem />

            <JobListItem />
          </FlexBoxCol>
        </div>
      </div>
    </div>
  );
};

export default JobList;
