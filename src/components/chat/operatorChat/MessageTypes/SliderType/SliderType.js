import React from 'react'
import styles from './SliderType.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const SliderType = ({data}) => {
    console.log(data);
    
  return (
    <div className={`${styles.sliderType} ${data?.sender === "guest" || data?.sender === "operator" ?styles.rightMsgImg:styles.leftMsgImg} ${data?.sender === "guest" || data?.sender === "operator" ?styles.right:styles.left}`}>
      <div className={styles.content}>
        <Swiper
        navigation={true} modules={[Navigation]} 
        spaceBetween={5}
        slidesPerView={3.5}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
        >
        {
            data?.arrData.length&&
            data?.arrData.map((item,index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className={styles.slideContent}>
                            <div className={styles.imageParent}>
                                <img src={item?.image} />
                            </div>
                            <div className={styles.textParent}>
                                <h2 className='danaRegular'>{item.title}</h2>
                                <div className={styles.priceParent}>
                                <span>قیمت :</span>
                                <p className={styles.price}>{item.price}</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                )
            })
        }
        </Swiper>
        {/* <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span> */}
      </div>
    </div>
  )
}

export default SliderType