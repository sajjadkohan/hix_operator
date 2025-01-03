import React, { useContext } from 'react'
import { ViewContext } from '../../../../../context/ViewContext';
import Grid from '@mui/material/Grid2/Grid2';
import { Button, InputAdornment, TextField } from '@mui/material';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbAlphabetLatin } from "react-icons/tb";
import { DashbordContext } from '../../../../../context/DashbordContext';
import { TbCategory } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuImage } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { RiQuestionLine } from "react-icons/ri";

const dataFormAddQuestions = [
  {
      size : 12,
      label : '',
      positionIcon : 'start',
      icon : <RiQuestionLine size={30} />,
      placeholder : 'سوال شما چیست',
      nameInput : 'question',
      type : 'input'
  },
  {
      size : 12,
      label : '',
      positionIcon : 'start',
      icon : <RiQuestionAnswerLine size={30} />,
      placeholder : 'چه جوابی داده شود ؟',
      nameInput : 'answer',
      type : 'textArea'
  },

]
const AddQuestionsModal = ({isEdit}) => {

    const {loading,
        showAddMessageModal,setShowAddMessageModal,
        handleOpenAddMessage,handleCloseAdMessage
    } = useContext(ViewContext);
    const {addQuestions,questionState, setQuestionState,editQuestions} = useContext(DashbordContext);


    const changHandler = (e) => {
      // console.log(e.name,e.value);
      // if(isEdit){

      // } else {
        setQuestionState({...questionState,
          [e.name] : e.value
        });
      // }
      console.log(questionState);
      
      
    }

    const addQuestionFn = async (e,data) => {
      e.preventDefault();
      await addQuestions(data);
    }
    
    const editQuestionFn = async (e,data) => {
      e.preventDefault();
      await editQuestions(data)
    }


return (
  <div>
        <form onSubmit={async (e) => isEdit? await editQuestionFn(e,questionState) : await addQuestionFn(e,questionState)}>
      <Grid container spacing={3}>

        {
          dataFormAddQuestions.length&&dataFormAddQuestions.map((item,index) => {
            return(
              <Grid item='true' size={item.size}>
                
              <TextField
                label=""
                value={questionState[item.nameInput]}
                name={item.nameInput}
                onChange={(e) => changHandler(e.target)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position={item?.positionIcon?item.positionIcon:'start'}>
                        {item.icon}
                      </InputAdornment>
                    ),
                  },
                }}
                variant="outlined"
                placeholder={item.placeholder}
                sx={{
                  width : '100%',
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    color: "#000",
                    fontFamily: "danaRegular",
                    fontSize : '20px',
                    background : '#f7f9ff96',
                    borderRadius : '20px',
        
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      border : 'none',
                    },
                    "&.Mui-focused fieldset": {
                      border: '1px solid #ffae45', // رنگ حاشیه در حالت فوکوس
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    // color: "#000",   
                    fontSize : '21px',
                    // fontFamily : 'danaBold'
                  },
                }}
              />
              </Grid>
            )
          })
        }
      

      <Grid container spacing={2} size={12}>
      <Grid item='true' size={12}>
        
        {/* <button onClick={async (e) => await addQuestionFn(e,dataState)} >send data</button> */}
        <Button variant="contained"
        onClick={async (e) => isEdit? await editQuestionFn(e,questionState) : await addQuestionFn(e,questionState)}
        sx={{
          padding: '12px 20px', // فاصله داخلی
          borderRadius: '18px', // گرد کردن لبه‌ها
          transition: 'background-color 0.3s ease', // انیمیشن برای تغییر رنگ
          color: '#fff', // رنگ متن
          borderColor: '#454545', // رنگ حاشیه
          width : '100%',
          fontFamily : 'danaBold',
          fontSize : '18px',
          '&:hover': {
            backgroundColor: '#2aacfa', // رنگ پس‌زمینه هنگام هاور
            color: '#fff', // رنگ متن هنگام هاور
          },
        }}
        >
          {loading.addOperator?
        'loading . . .'
        :
        isEdit? 'ویرایش' : 'افزودن'  
        }
        </Button>
      </Grid>
      </Grid>
    </Grid>
        </form>
  </div>
)
}


export default AddQuestionsModal