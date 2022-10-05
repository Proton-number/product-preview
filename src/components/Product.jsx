import React from 'react'
import {Typography, Box, Container, Button, createTheme, ThemeProvider, Stack} from '@mui/material'
import mobile from '/src/images/image-product-mobile.jpg'
import desktop from '/src/images/image-product-desktop.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(166, 94%, 26%)'
        }
    }
})

function product() {
  return (
  
     <Box className='container' >

<Box>
  <img src={mobile} alt="" className='mobile-img' />
  <img src={desktop} alt="" className='desktop-img' />
</Box>

<Container id='main' sx={{padding:'20px'}}>

  <Typography variant='h7' id='perfume' gutterBottom>P E R F U M E</Typography>

  <Typography variant='h4' id='h4' gutterBottom>Gabrielle Essence Eau De Parfum</Typography>
   
   <Typography id='words' gutterBottom>A floral solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Typography>

   <Stack spacing={2} direction='row'  >
     <ThemeProvider theme={theme} >
       <Typography fontSize='40px' color='primary' id='price'>$149.99</Typography>
     </ThemeProvider>

      <Typography id='price2'    gutterBottom>$169.99</Typography>
   </Stack>

 <ThemeProvider theme={theme}>
 <Button id='btn' sx={{borderRadius:'10px'}} startIcon={<ShoppingCartOutlinedIcon/>}  variant='contained' color='primary' size='large'  fullWidth disableElevation>Add to cart</Button>
 </ThemeProvider>

</Container>

</Box>
  )
}

export default product
