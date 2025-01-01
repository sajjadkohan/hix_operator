import React, { useContext, useEffect } from 'react'
import styles from './MessageReady.module.css';
import { TitleContent } from '../../../../../global/globalComponents/globalMuiComponent/globalMuiComponents';
import { Button } from '@mui/material';
import { RiAddCircleFill } from 'react-icons/ri';
import ListItems from '../../../../../global/globalComponents/ListItems/ListItems';
import Grid from '@mui/material/Grid2';
import ModalFormLayout from '../../../../../global/globalComponents/ModalFormLayout/ModalFormLayout';
import AddProductModal from '../../products/modals/AddProductModal';
import ModalLayout from '../../../../../global/globalComponents/ModalLayout/ModalLayout';
import { ViewContext } from '../../../../../context/ViewContext';
import AddQuestionsModal from '../modals/AddQuestionsModal';
import { DashbordContext } from '../../../../../context/DashbordContext';


const headRow = [

    {
        size : 6,
        text : 'سوال'
    },
    {
        size : 6,
        text : 'جواب'
    },

]
const MessageReady = () => {

    const {
        showAddMessageModal,setShowAddMessageModal,
        handleOpenAddMessage,handleCloseAdMessage
    } = useContext(ViewContext);
    const {getQuestions,questionList,reloadList} = useContext(DashbordContext);

    useEffect(() => {
        const getQuestionsFn = async () => {
            await getQuestions();
        };
        getQuestionsFn();
    },[reloadList]);

  return (
    <div className={styles.messageReady}>
        <ModalLayout 
            handleOpen={handleOpenAddMessage} 
            handleClose={handleCloseAdMessage} 
            hasOpen={showAddMessageModal} 
            children={
            <div>
                <ModalFormLayout children={
                    <>
                    <div style={{direction: 'rtl'}}>
                        <AddQuestionsModal/>
                    </div>
                    </>
                } 
                />
            </div>
            }
        />
        <TitleContent value={'پیام های آماده'} />
        <div className='actionBar'>
        <Button onClick={handleOpenAddMessage} className=''>
                <span>افزودن سوال</span>
                <span className={'icon'}><RiAddCircleFill size={25} /></span>
            </Button>
        </div>

        <div className={styles.content}>
            <div style={{padding : '0px 10px'}}>
                <ListItems productList={[1,2,3,4]} title={'لیست پیام ها'} headRow={headRow} />
            </div>
        <div className={styles.meesageItems}>
            <div className={styles.items}>
                <Grid container spacing={2} size={12}>
                    {
                        questionList&&questionList.map((item,index) => {
                            return(
                                <div className={`${styles.itemBox} w100 dFlex`} key={index}>                                
                                <Grid item='true' size={6}><p className='danaRegular'>{item.question}</p></Grid>
                                <Grid item='true' size={6}><p className={`${styles.answer} danaRegular`}>{item.answer}</p></Grid>
                                </div>
                            )
                        })
                    }

                </Grid>
                
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default MessageReady