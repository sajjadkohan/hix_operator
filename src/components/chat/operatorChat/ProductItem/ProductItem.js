import React, { useContext } from 'react';
import styles from './ProductItem.module.css';
import imageVector from '../../../../images/chat/operator/Fry_Doherty-05.webp';
import { FaCheck } from "react-icons/fa";
import { ChatContext } from '../../../../context/ChatContext';


const ProductItem = ({data}) => {

    const {seletedProduct,setSelectedProduct} = useContext(ChatContext);

    const selectItem = (dataItem) => {
        // console.log(dataItem);
        setSelectedProduct([...seletedProduct,dataItem]);
        console.log(seletedProduct);
        
        
    }

  return (
    <div className={styles.productItem}>
        <div onClick={() => selectItem(data)} className={styles.check}>
            <span className={styles.icon}>
            <FaCheck />
            </span>
        </div>
        <div className={styles.imageParent}>
            {/* <img src={data.image?data.image:imageVector} /> */}
            <img src={imageVector} />
        </div>
        <h2 className={styles.title}>{data.title}</h2>
        <p className=''>{data.category}</p>
        <p className=''>{data.price}</p>
        <p className=''>{data.description}</p>
      
    </div>
  )
}

export default ProductItem
