import React, { useContext, useState } from 'react'
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
import ModalLayout from '../../../../../global/globalComponents/ModalLayout/ModalLayout';
import ModalFormLayout from '../../../../../global/globalComponents/ModalFormLayout/ModalFormLayout';
import AddOperatorForm from './AdOperatorForm/AddOperatorForm';
import OperatorList from './OperatorsList/OperatorsList';


const OperatorSettings = () => {

    const [openAddOperator,setOpenAdOperator] = useState(false)

    const {
        handleOpenAddPro,handleCloseAddPro,
        handleOpenAddCat,handleCloseAdCat,
        handleOpenAddFea,handleCloseAdFea,
    } = useContext(ViewCtx);

    const handleOpenOperator = () => {
        
    }

  return (
    <div>
        <TitleContent value={'مدیریت اپراتور'} />

        <div className={styles.actionBar} style={{borderBottom : `1px solid #${themeColorLayer3}`}}>
            <ModalLayout 
            handleOpen={() => setOpenAdOperator(true)} 
            handleClose={() => setOpenAdOperator(false)} 
            hasOpen={openAddOperator} 
            children={
            <div>
                <ModalFormLayout children={
                    <>
                    <div style={{direction: 'rtl'}}><AddOperatorForm/></div>
                    </>
                } 
                />
            </div>
            }
            />
            {/* <AddCategoryModal handleOpen={handleOpenAddCat} handleClose={handleCloseAdCat} /> */}
            <AddFeatureModal handleOpen={handleOpenAddFea} handleClose={handleCloseAdFea} />
            <Button onClick={() => setOpenAdOperator(true)} className=''>
                <span>افزودن اپراتور</span>
                <span className={styles.icon}><RiAddCircleFill size={25} /></span>
            </Button>
        </div>
        <div className={styles.content}>
            <OperatorList title={'لیست اپراتور ها'} />
        </div>
    </div>
  )
}

export default OperatorSettings