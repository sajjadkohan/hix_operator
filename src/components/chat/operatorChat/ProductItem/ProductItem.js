import React, { useContext } from 'react';
import styles from './ProductItem.module.css';
import imageVector from '../../../../images/chat/operator/Fry_Doherty-05.webp';
import { FaCheck } from "react-icons/fa";
import { ChatContext } from '../../../../context/ChatContext';


const ProductItem = ({data}) => {

    const {seletedProduct,setSelectedProduct} = useContext(ChatContext);

    const selectItem = (dataItem) => {
        // console.log(dataItem);
        if(seletedProduct.find(itm => itm._id === dataItem._id)){
            const selected = seletedProduct.filter(itm => itm._id !== dataItem._id);
            setSelectedProduct(selected);
        } else {

            setSelectedProduct([...seletedProduct,dataItem]);
        }
        console.log(seletedProduct);
        
        
    }

    console.log(data);
  return (
    
    <div className={styles.productItem}>
        <div onClick={() => selectItem(data)} className={`${styles.check} ${seletedProduct.find(itm => itm._id === data._id)? styles.active : ''}`}>
            <span className={styles.icon}>
            {seletedProduct.find(itm => itm._id === data._id)? <FaCheck /> : ''}
            
            </span>
        </div>
        <div className={styles.imageParent}>
            {/* <img src={data.image?data.image:imageVector} /> */}
            <img src={data?.image?data.image : imageVector} />
        </div>
        <h2 className={styles.title}>{data.title}</h2>
        <p className=''>{data.category}</p>
        <p className=''>{data.price}</p>
        <p className=''>{data.description}</p>
      
    </div>
  )
}

export default ProductItem
