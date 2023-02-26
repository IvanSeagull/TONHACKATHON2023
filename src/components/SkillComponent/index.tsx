import React from 'react';

import styles from './SkillComponent.module.scss';

interface SkillProps {
  value: string;
}

const SkillComponent: React.FC<SkillProps> = ({ value }) => {
  return <div className={styles.wrapper}>{value}</div>;
};

export default SkillComponent;
