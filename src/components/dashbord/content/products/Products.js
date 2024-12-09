import React, { useContext, useEffect } from 'react'
import { TitleContent } from '../../../../global/globalComponents/globalMuiComponent/globalMuiComponents'
import styles from './Products.module.css';
import { themeColorLayer3 } from '../../../../utils/constanst';
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiFunctionAddFill } from "react-icons/ri";
import { RiAddCircleFill } from "react-icons/ri";
import ListProducts from './ListProducts/ListProducts';

import { ViewCtx } from '../../../../context/ViewContext';
import AddProductModal from './modals/AddProductModal';
import AddCategoryModal from './modals/AddCategoryModal';
import AddFeatureModal from './modals/AddFeatureModal';
import ModalLayout from '../../../../global/globalComponents/ModalLayout/ModalLayout';
import ModalFormLayout from '../../../../global/globalComponents/ModalFormLayout/ModalFormLayout';
import AddOperatorForm from '../chatSettings/operator/AdOperatorForm/AddOperatorForm';
import { TbMailFilled } from 'react-icons/tb';
import { DashbordContext } from '../../../../context/DashbordContext';
import { AuthCtx } from '../../../../context/AuthContext';

const dataFormAddProduct = [
    {
        size : 12,
        label : '',
        positionIcon : 'start',
        icon : <TbMailFilled size={30} />,
        placeholder : 'نام محصول',
        nameInput : 'product_name',
    },
    {
        size : 12,
        label : '',
        positionIcon : 'start',
        icon : <TbMailFilled size={30} />,
        placeholder : 'تعداد',
        nameInput : 'count',
    },
    {
        size : 12,
        label : '',
        positionIcon : 'start',
        icon : <TbMailFilled size={30} />,
        placeholder : 'قیمت',
        nameInput : 'price',
    },
]

const Products = () => {

    const {
        handleOpenAddPro,handleCloseAddPro,
        handleOpenAddCat,handleCloseAdCat,
        handleOpenAddFea,handleCloseAdFea,

        showAddProductModal,
        showAddCategoryModal,
        showAddFeatureModal,
    } = useContext(ViewCtx);

        const {products,getProductByMtId,addSingleProduct} = useContext(DashbordContext);
        const {user} = useContext(AuthCtx);
        useEffect(() => {
            const getPtoduct = async() => {
                await getProductByMtId(user?._id)
            };
            user&&getPtoduct()
        },[user]);

  return (
    <div>
        <TitleContent value={'محصولات'} />

        <div className={styles.actionBar} style={{borderBottom : `1px solid #${themeColorLayer3}`}}>
        <ModalLayout 
        handleOpen={handleOpenAddPro} 
        handleClose={handleCloseAddPro} 
        hasOpen={showAddProductModal} 
        children={
        <div>
            <ModalFormLayout children={
                <>
                <div style={{direction: 'rtl'}}><AddProductModal/></div>
                </>
            } 
            />
        </div>
        }
        />

        <ModalLayout 
        handleOpen={handleOpenAddCat} 
        handleClose={handleCloseAdCat} 
        hasOpen={showAddCategoryModal} 
        children={
        <div>
            <ModalFormLayout children={
                <>
                <div style={{direction: 'rtl'}}>
                <AddCategoryModal />
                </div>
                </>
            } 
            />
        </div>
        }
        />

        <ModalLayout 
        handleOpen={handleOpenAddFea} 
        handleClose={handleCloseAdFea} 
        hasOpen={showAddFeatureModal} 
        children={
        <div>
            <ModalFormLayout children={
                <>fea
                <div style={{direction: 'rtl'}}><AddOperatorForm/></div>
                </>
            } 
            />
        </div>
        }
        />

            {/* <AddProductModal handleOpen={handleOpenAddPro} handleClose={handleCloseAddPro} /> */}
            {/* <AddCategoryModal handleOpen={handleOpenAddCat} handleClose={handleCloseAdCat} /> */}
            {/* <AddFeatureModal handleOpen={handleOpenAddFea} handleClose={handleCloseAdFea} /> */}

            <Button onClick={handleOpenAddPro} className=''>
                <span>افزودن محصول</span>
                <span className={styles.icon}><RiAddCircleFill size={25} /></span>
            </Button>
            <Button onClick={handleOpenAddCat} className=''>
                <span>افزودن دسته بندی</span>
                <span className={styles.icon}><RiFunctionAddFill size={25} /></span>
            </Button>
            <Button onClick={handleOpenAddFea} className=''>
                <span>افزودن ویژگی</span>
                <span className={styles.icon}><RiAddCircleFill size={25} /></span>
            </Button>
        </div>
        <div className={styles.content}>
            <ListProducts title={'لیست محصولات'} />
        </div>
    </div>
  )
}

export default Products