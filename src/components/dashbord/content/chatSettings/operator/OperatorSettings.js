import React, { useContext } from 'react'
import { TitleContent } from '../../../../../global/globalComponents/globalMuiComponent/globalMuiComponents'
import styles from './OperatorSettings.module.css';
import { themeColorLayer3 } from '../../../../../utils/constanst';
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiFunctionAddFill } from "react-icons/ri";
import { RiAddCircleFill } from "react-icons/ri";
import ListProducts from '../../products/ListProducts/ListProducts';


// import AddProductModal from './modals/AddProductModal';
// import AddCategoryModal from './modals/AddCategoryModal';
// import AddFeatureModal from './modals/AddFeatureModal';
import { ViewCtx } from '../../../../../context/ViewContext';
import AddProductModal from '../../products/modals/AddProductModal';
import AddCategoryModal from '../../products/modals/AddCategoryModal';
import AddFeatureModal from '../../products/modals/AddFeatureModal';


const OperatorSettings = () => {

    const {
        handleOpenAddPro,handleCloseAddPro,
        handleOpenAddCat,handleCloseAdCat,
        handleOpenAddFea,handleCloseAdFea,
    } = useContext(ViewCtx);

  return (
    <div>
        <TitleContent value={'مدیریت اپراتور'} />

        <div className={styles.actionBar} style={{borderBottom : `1px solid #${themeColorLayer3}`}}>
            <AddProductModal handleOpen={handleOpenAddPro} handleClose={handleCloseAddPro} />
            <AddCategoryModal handleOpen={handleOpenAddCat} handleClose={handleCloseAdCat} />
            <AddFeatureModal handleOpen={handleOpenAddFea} handleClose={handleCloseAdFea} />
            <Button onClick={handleOpenAddPro} className=''>
                <span>افزودن اپراتور</span>
                <span className={styles.icon}><RiAddCircleFill size={25} /></span>
            </Button>
        </div>
        <div className={styles.content}>
            <ListProducts />
        </div>
    </div>
  )
}

export default OperatorSettings