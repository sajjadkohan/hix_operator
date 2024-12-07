import React, { useContext } from 'react'
import { ViewCtx } from '../../../../../context/ViewContext';
import Grid from '@mui/material/Grid2/Grid2';
import { Button, InputAdornment, TextField } from '@mui/material';
import { HiUserCircle } from 'react-icons/hi';
import { TbMailFilled } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbAlphabetLatin } from "react-icons/tb";

const dataFormAddProduct = [
  {
      size : 12,
      label : '',
      positionIcon : 'start',
      icon : <MdDriveFileRenameOutline size={30} />,
      placeholder : 'نام دسته بندی',
      nameInput : 'cat_name',
  },
  {
      size : 12,
      label : '',
      positionIcon : 'start',
      icon : <TbAlphabetLatin size={30} />,
      placeholder : 'نام لاتین',
      nameInput : 'en_name',
  },
]
const AddCategoryModal = () => {

    const {showAddCategoryModal,setShowAddCategoryModal,loading} = useContext(ViewCtx);

    const [dataState, setDataState] = React.useState({
      'en_name' : '',
      'cat_name' : '',
    });

    const changHandler = (e) => {
      console.log(e.name,e.value);
      setDataState({...dataState,
        [e.name] : e.value
      });
      console.log(dataState);
      
      
    }

    const addOperatorFn = async (data) => {
    // setLoading({...loading,addOperator : true});

    //   const res = await requestData('/operator/add','POST',data);
    //   console.log(res);
    // setLoading({...loading,addOperator : false});
    //   if(res?.status == 200){
    //     toast.success(<p className='danaRegular'>{res?.data?.message}</p>)
    //   } else {
    //     toast.error(<p className='danaRegular'>{res?.data?.message}</p>)

    //   }
      
    };

return (
  <div>
      <Grid container spacing={3}>

        {
          dataFormAddProduct.length&&dataFormAddProduct.map((item,index) => {
            return(
              <Grid item='true' size={item.size}>
              <TextField
                label=""
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
      

      {/* <Grid item size={6}>
      <TextField
        label=""
        name="lastName"
        onChange={(e) => changHandler(e.target)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <HiUserCircle size={30} />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
        placeholder='نام خانوادگی'
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
        }}
      />
      </Grid> */}

      
      {/* <Grid item size={12}>
      <TextField
        label=""
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <TbMailFilled size={30} />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
        placeholder='ایمیل یا نام کاربری'
        name="userName"
        onChange={(e)=> changHandler(e.target)}
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
        }}
      />
      </Grid> */}


      <Grid container spacing={2} size={12}>
      <Grid item='true' size={12}>
      <Button variant="contained"
      onClick={async() => await addOperatorFn(dataState)}
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
      'افزودن'  
      }
      </Button>
      </Grid>
      </Grid>
    </Grid>
  </div>
)
}

export default AddCategoryModal