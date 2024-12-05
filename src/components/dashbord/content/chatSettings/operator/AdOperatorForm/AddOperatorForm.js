import React, { useContext } from 'react'
import Grid from '@mui/material/Grid2/Grid2';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { HiUserCircle } from 'react-icons/hi';
import { TbMailFilled } from 'react-icons/tb';

import { ViewCtx } from '../../../../../../context/ViewContext';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { requestData } from '../../../../../../utils/functions';
import toast from 'react-hot-toast';
const AddOperatorForm = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [dataState, setDataState] = React.useState({
    'userName' : '',
    'password' : '',
    'confirmPassword':'',
    "firstName": "",
    "lastName":"",
  });
    const {loading,setLoading} = useContext(ViewCtx);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }; 
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const changHandler = (e) => {
        console.log(e.name,e.value);
        setDataState({...dataState,
          [e.name] : e.value
        });
        console.log(dataState);
        
        
      }

      const addOperatorFn = async (data) => {
      setLoading({...loading,addOperator : true});

        const res = await requestData('/operator/add','POST',data);
        console.log(res);
      setLoading({...loading,addOperator : false});
        if(res?.status == 200){
          toast.success(<p className='danaRegular'>{res?.data?.message}</p>)
        } else {
          toast.error(<p className='danaRegular'>{res?.data?.message}</p>)

        }
        
      };

  return (
    <div>
        <Grid container spacing={3}>
        
        <Grid item='true' size={6}>
        <TextField
          label=""
          name="firstName"
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
          placeholder='نام'
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
        <Grid item='true' size={6}>
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
        </Grid>

        
        <Grid item='true' size={12}>
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
        </Grid>

        <Grid item='true' size={12}>
        <TextField
          label=""
          type={showPassword ? 'text' : 'password'}
          name='password'
          onChange={(e) => changHandler(e.target)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  style={{fontFamily : 'danaRegular'}}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          placeholder='رمز ورود'
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
        </Grid>
        
        <Grid item='true' size={12}>
        <TextField
          label=""
          name="confirmPassword"
          onChange={(e) => changHandler(e.target)}
          type={showPassword ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  style={{fontFamily : 'danaRegular'}}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          placeholder='تکرار رمز ورود'
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
        </Grid>
        

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
        'ثبت نام'  
        }
        </Button>
        </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddOperatorForm
