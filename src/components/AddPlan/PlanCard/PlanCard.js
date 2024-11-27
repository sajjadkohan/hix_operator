import React from 'react'
import styles from './PlanCard.module.css'
const PlanCard = ({data,active}) => {

    const buyPlan = async() => {
        console.log(data,data._id);
        
    }

  return (
    <div className={`${styles.planCard} ${active&&styles.active}`}>
      <div className={styles.row}>
        <h1 className='danaRegular'>
          پکیج {data.faName}
        </h1>
        <p className='fn14'>
          این پکیج بسیار به صرفه میباشد و با خرید ان میتوانید در وقت و هزینه خود صرفه جویی کنید
        </p>
      </div>
      {data.planName}
      <div className={`${styles.priceParent} dFlex algCenter`}>
        <span>ماهانه</span>
       /
        <h1>{data.conversations}</h1>
      </div>
      <button className={styles.buyBtn} onClick={async() => await buyPlan()}>خرید و شروع پکیج</button>

      <div className={styles.dateParent}>
        <span>اعتبار</span>
        :
        <span>{data.expire} روز</span>
      </div>
    </div>
  )
}

export default PlanCard
