import React from 'react';

import styles from './Stepper.module.scss';

interface StepperProps {
  totalSteps: number;
  step: number;
}

const Stepper: React.FC<StepperProps> = ({ totalSteps = 2, step = 0 }) => {
  //   const [step, setActiveStep] = React.useState<number>(step);
  //   const [totalSteps, setTotalSteps] = React.useState<number>(totalSteps);
  return (
    <div className={styles.stepper}>
      {new Array(totalSteps).fill(0).map((_, index) => (
        <div className={styles.row} key={index}>
          <div className={step >= index ? styles.activeCircle : styles.circle} />
          {index + 1 < totalSteps && (
            <div className={step - 1 >= index ? styles.activeLine : styles.line} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
