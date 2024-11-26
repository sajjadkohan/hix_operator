import React from 'react'
import styles from './PlanCard.module.css'
const PlanCard = ({data}) => {

    const buyPlan = async() => {
        console.log(data.planName);
        
    }

  return (
    <div className={styles.planCard}>
      {data.planName}
      <div className={styles.priceParent}>
        <span>قیمت</span>
        :
        <span>{data.price}</span>
      </div>
      <div className={styles.dateParent}>
        <span>اعتبار</span>
        :
        <span>{data.expire} روز</span>
      </div>
      <button onClick={async() => await buyPlan()}>خرید پلن</button>
    </div>
  )
}

export default PlanCard
