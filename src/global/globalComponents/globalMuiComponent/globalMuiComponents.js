import { styled } from '@mui/material';


export const TextFilter = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark"?"#000":"#fff",
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    // color: theme.palette.mode === "dark"?"#fff":"#393639",
  
  }));



  export const TabDashbord = styled("div")(({ }) => ({
    fontSize: '14px',
    fontWeight: '400',
    padding : '10px',
    marginBottom : '20px',
    // width: '100%',
    display : 'flex',
    justifyContent : 'right',
    padding: '5px 2vw 5px 0.5vw',
  
  }));

  export const AcionListParent = styled("div")(({ }) => ({
    background: 'white',
    border: '1px solid #eaeaeab2',
    borderRadius: '20px',
    padding: '20px 0px',
    boxShadow: '0px 0px 10px #8282821c',
    marginBottom : '20px'
  }));

  export const Title = styled("h1")(({  }) => ({
    color: '#3C096C',
    textAlign: 'right',
    fontFamily: 'danaRegular',
  }));

  export const TitleContent = ({value}) => {
    return(
      <Title>{value}</Title>
    )
  }


