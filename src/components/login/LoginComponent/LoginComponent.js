import React, { useContext } from 'react'
import styles from '../Login.module.css';
import Grid from '@mui/material/Grid2';
import { Button, InputAdornment, TextField } from '@mui/material';
import { HiUserCircle } from "react-icons/hi";
import { TbMailFilled } from "react-icons/tb";
import IconButton from '@mui/material/IconButton';

import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { ViewCtx } from '../../../context/ViewContext';
import toast from 'react-hot-toast';




const LoginComponent = () => {

  const {hasLogin,setHasLogin,loading,setLoading,hasoperator,setHasOperator} = useContext(ViewCtx);

  const [showPassword, setShowPassword] = React.useState(false);
  const [dataState, setDataState] = React.useState({
    'userName' : '',
    'password' : '',
    'hasOperator' : hasoperator
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const requestData = async(api,method,data) => {

    const res = await fetch(`https://hixnew.liara.run${api}`,{
      method:method?method:'POST',
      // mode: "cors",
      // cache: "no-cache",
      credentials: "include",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    });
    
    return await res.json()
  }

  const createAcount = async() => {
    setHasLogin(false);
    
    // console.log(dataState);
    const data = {
      userName : dataState.userName,
      password : dataState.password,
    }
    if(!hasLogin){
      setLoading({...loading,register : true});
      try {
        const res = await requestData('/user/addUser','POST',data);
        console.log(res);
        if(res.success){
          toast.success(res.message);
        } else {
          toast.error(res.message);
    
        }
        setLoading({...loading,register : false});
      } catch (error) {
        toast.error('لطفا اینترنت خود را متصل نمایید')
      }
    }
  

    
  };


  const loginAcount = async() => {
    setHasLogin(true);

    const data = {
      userName : dataState.userName,
      password : dataState.password,
    };

    if(hasLogin){
      try {
        for (let key in data){

          console.log(key,data[key]);
          if(!data[key]){
            toast.error(`Please Enter ${key}`);
            break;
          } else{
              const res = await requestData('/user/login','POST',data);
              console.log(res);
          }
        }
    
      } catch (error) {
        toast.error('لطفا اینترنت خود را متصل نمایید')
      }
    }


    Object.keys(data).forEach((item) => {
      
    })

  };

  const changHandler = (e) => {
    console.log(e.name,e.value);
    setDataState({...dataState,
      [e.name] : e.value
    });
    console.log(dataState);
    
    
  }

  return (
    <div className={styles.loginComponent}>
      <Grid container spacing={3}>
        {
          !hasLogin&&
          <>
        <Grid item size={6}>
        <TextField
          label=""
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
        <Grid item size={6}>
        <TextField
          label=""
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
          </>
        }
        <Grid item size={12}>
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
          placeholder='ایمیل'
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
        <Grid item size={12}>
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
        {
          !hasLogin&&
        <Grid item size={12}>
        <TextField
          label=""
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
        }
        <Grid container spacing={2} size={12}>
        <Grid item size={6}>
        <Button variant="contained"
        onClick={async() => await createAcount()}
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
            backgroundColor: '#ccc', // رنگ پس‌زمینه هنگام هاور
            color: '#fff', // رنگ متن هنگام هاور
          },
        }}
        >
          {loading.register?
        'loading . . .'
        :
        'ثبت نام'  
        }
        </Button>
        </Grid>
        <Grid item size={6}>
        <Button variant="outlined"
        onClick={() => loginAcount()}
        sx={{
          backgroundColor : '#ffffff6e',
          padding: '12px 20px', // فاصله داخلی
          borderRadius: '18px', // گرد کردن لبه‌ها
          transition: 'background-color 0.3s ease', // انیمیشن برای تغییر رنگ
          color: '#000', // رنگ متن
          borderColor: '#ccc', // رنگ حاشیه
          width : '100%',
          fontFamily : 'danaBold',
          fontSize : '18px',
          '&:hover': {
            backgroundColor: '#ccc', // رنگ پس‌زمینه هنگام هاور
            color: '#fff', // رنگ متن هنگام هاور
          borderColor: '#fff', // رنگ حاشیه

          },
        }}
      >
      ورود</Button>
        </Grid>


        </Grid>
        <Grid onClick={() => setHasOperator(!hasoperator)} spacing={2} className={'dFlex algCenter'} size={12}>
          <span className={`${styles.checkBox} ${hasoperator&&styles.active}`}></span>
          <p className={`danaRegular mr10 textMuted ${styles.textCheckBox}`}>ورود به عنوان اپراتور</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginComponent
