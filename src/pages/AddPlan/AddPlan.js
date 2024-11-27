import React from 'react'
import styles from './AddPlan.module.css';

import PlanContext from '../../context/PlanContext';
import PlansView from '../../components/AddPlan/PlansView/PlansView';


const AddPlan = () => {
  return (
    <div className={styles.addPlan}>
        <PlanContext>
            <PlansView />
       </PlanContext>
    </div>
  )
}

export default AddPlan
