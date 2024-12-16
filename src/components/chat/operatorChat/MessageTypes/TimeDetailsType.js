import React from 'react'
import styles from '../Operator.module.css'


const TimeDetailsType = ({item}) => {
  return (
    
    <div className={styles.dateStart}>
        <span>
             {item.fullTime.day}&nbsp;
             {item.fullTime.monthName}&nbsp;
              {item.fullTime.year}
        </span> 
    </div>  
        
  )
}

export default TimeDetailsType