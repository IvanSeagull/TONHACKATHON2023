import React from 'react';
import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';

import styles from './FinishedStep.module.scss';

const FinishedStep = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/icons/success.svg" />
      <h5 className={styles.title}>Job posted!</h5>
      <p className={styles.desc}>Your job application was posted successfully.</p>
      <PrimaryButton text="Visit job page" onClick={() => console.log('123')} />
    </div>
  );
};

export default FinishedStep;
