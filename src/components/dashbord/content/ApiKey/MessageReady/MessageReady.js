import React, { useContext, useEffect, useState } from 'react'
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
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";


const headRow = [

    {
        size : 5,
        text : 'سوال'
    },
    {
        size : 5,
        text : 'جواب'
    },
    {
        size : 2,
        text : 'عملیات'
    },

]
const MessageReady = () => {

    const {
        showAddMessageModal,setShowAddMessageModal,
        handleOpenAddMessage,handleCloseAdMessage
    } = useContext(ViewContext);
    const {getQuestions,questionList,reloadList,deleteQuestions,editQuestions,
        questionState, setQuestionState,
    } = useContext(DashbordContext);

    const [isEdit,setIsEdit] = useState(false);
    const [dataState,setDataState] = useState(false);

    useEffect(() => {
        const getQuestionsFn = async () => {
            await getQuestions();
        };
        getQuestionsFn();
    },[reloadList]);

    const editItem = (data) => {
        setIsEdit(true);
        
        setQuestionState((prevState) => {
        let prev = {...prevState};
        
        prev.answer = data.answer;
        prev.question = data.question;
        prev.id = data._id;
        
            return prev
        }
        );
        handleOpenAddMessage();
        
    }

  return (
    <div className={styles.messageReady}>
        <ModalLayout 
            handleOpen={handleOpenAddMessage} 
            handleClose={() =>{
                handleCloseAdMessage();
                setIsEdit(false);
            }
            } 
            hasOpen={showAddMessageModal} 
            children={
            <div>
                <ModalFormLayout children={
                    <>
                    <div style={{direction: 'rtl'}}>
                        <AddQuestionsModal isEdit={isEdit} />
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
                                <Grid item='true' size={5} className={'dFlex algCenter'}><p className='danaRegular'>{item.question}</p></Grid>
                                <Grid item='true' size={5}><p className={`${styles.answer} danaRegular`}>{item.answer}</p></Grid>
                                <Grid display={'flex'} item='true' size={2}>
                                    <div className={`${styles.actionParent}`}>
                                        <Button onClick={() => editItem(item)} variant="text" color='info' className='ml10'><RiEdit2Fill size={22} /></Button>
                                        <Button onClick={async() => await deleteQuestions(item._id)} variant="text" color='error'><MdDelete size={22} /></Button>
                                    </div>
                                </Grid>
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