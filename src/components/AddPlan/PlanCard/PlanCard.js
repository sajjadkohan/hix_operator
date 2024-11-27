import React, { useContext } from 'react'
import styles from './PlanCard.module.css'
import ItemProperty from './ItemProperty';
import { PlanCtx } from '../../../context/PlanContext';
import { ViewCtx } from '../../../context/ViewContext';
import { CircularProgress } from '@mui/material';

const PlanCard = ({data,active}) => {

  const {setFreePlan} = useContext(PlanCtx);
  const {loading,setLoading} = useContext(ViewCtx);



  const arrayPr =  [
    {
      'has' : true,
      'nameProperty' : 'comparison',
      'decription' : 'دارای ویژگی فلام میباشد'

    },
    {
      'has' : false,
      'nameProperty' : 'comparison',
      'decription' : 'دارای ویژگی فلام میباشد'

    },{
      'has' : true,
      'nameProperty' : 'comparison',
      'decription' : 'دارای ویژگی فلام میباشد'

    }
  ];

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
      <button className={styles.buyBtn} onClick={async() => await setFreePlan(data._id)}>
        <span className={styles.text}>خرید و شروع پکیج</span>
        {
          loading.setPlans&&loading.setPlans===data._id&&<span className={styles.icon}><CircularProgress size="25px" color='#3C096C' /> </span>
        }
        
      </button>

      <ul className={styles.propertyList}>
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={false} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={false} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={false} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={false} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />
        <ItemProperty text={'لورم ایپسوم با تولید متن ساختگی'} has={true} />

      </ul>
      <div className={styles.dateParent}>
        <span>اعتبار</span>
        :
        <span>{data.expire} روز</span>
      </div>
    </div>
  )
}

export default PlanCard
