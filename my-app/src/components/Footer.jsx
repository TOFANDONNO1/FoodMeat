import '../Routes/home.scss';
import foodmeat from "../food-meat-low-resolution-color-logo.png"

import { Box, Button,Text, ButtonGroup ,Flex,WrapItem} from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Image,
} from "@chakra-ui/react";
function Footer(){
    const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};
const dis={ base: 'flex', md: 'flex',lg:'flex',xl:'grid' }
const  flex={base:"column" ,md:'column',lg:"row",xl:'row'}
// const styles={
//     display:{ base: 'flex', md: 'flex',lg:'flex',xl:'grid' } 

// flexDirection={{base:"column" ,md:'column',lg:"row",xl:'row'}} 
// }
    return(
        <>
        
<hr />
<Image style={{width:'180px'}} src={foodmeat} alt="LOGO" />

        <Flex 
        display={dis} 
        flexDirection={flex} 
        className='firstdivFooter' >
            
            <Box >
                <Text>USEFUL LINKS</Text>
                <Text>Why Licious?</Text>
                <Text>Refer & Earn</Text>
                <Text>Licious Cah & Cash+</Text>
                <Text>Careers</Text>
                <Text>BLOG</Text>
                <Text>Campaign</Text>
                <Text>Bug Bounty Guidelines</Text>
                <Text>About Us</Text>
                <Text>FSSC 22000 Certification</Text>
                <Text>FSSAI Licenses</Text>
                <Text>SA8000 Certification</Text>
                <Text>Sitemap</Text>
            </Box>

            <Box>
                <Text>EXPERIENCE LICIOUS APP ON </Text><b>MOBILE</b>
           <Image  src="https://www.licious.in/img/rebranding/app-store-new.svg" alt="https://www.licious.in/img/rebranding/app-store-new.svg" />
  <Image src="https://www.licious.in/img/rebranding/play-store-new.png" alt="https://www.licious.in/img/rebranding/play-store-new.png" />         
            </Box>


            <Box>
<Text>CONTACT US</Text>
<Text>Call : 1800-4190-786</Text>

<Text>Talktous@licious.com</Text>
<Text>REGISTERED OFFICE</Text>
<Text>ADDRESS:</Text>
           <Text>House of Licious , Zed Pearl,</Text>
           <Text>No 12,Domlur Layout</Text>
           <Text>Bangalore,Karnataka-</Text>
           <Text>560071</Text>
            </Box>


            <Box>
                <Text>T&C</Text>
                <Text>FAQ</Text>
                <Text>Privacy Policy</Text>
                <Text>HAVE SECURITY CONCERN</Text>
                <Text>Mail us to:</Text>
                <Text>security@licious.com</Text>
            </Box>


            <Box>
                <Image  style={{width:'150px'}} src="https://www.licious.in/img/rebranding/3-dsecure.png" alt="https://www.licious.in/img/rebranding/3-dsecure.png" />
            </Box>
        </Flex>
    <br />
    <Flex
     display={dis} 
     flexDirection={flex} 
    className='seconddivFooter'><b>KEEP IN TOUCH</b>
   
   <Box display={{ base: 'flex', md: 'none' }} flexDirection='column'>
   <Image  src="https://www.licious.in/img/rebranding/insta_color.png" alt="https://www.licious.in/img/rebranding/insta_color.png" />
   <Image  src="https://www.licious.in/img/rebranding/fb_color.png" alt="https://www.licious.in/img/rebranding/fb_color.png" />
   <Image  src="https://www.licious.in/img/rebranding/twitter_color.png" alt="https://www.licious.in/img/rebranding/twitter_color.png" />
   
   </Box>
   
    </Flex>
    <Text>CITIES WE SERVE</Text>
    <Flex 
 display={dis} 
 flexDirection={flex} 
    className='Cities'>
       
        <Text>Bengaluru</Text>
        <Text>NCR</Text>
        <Text>Hyderabad</Text>
        <Text>Chandigarh</Text>
        <Text>PanchKula</Text>
        <Text>Mohali</Text>
        <Text>Mumbai</Text>
        <Text>Pune</Text>
        <Text>Chennai</Text>
        <Text>Coimbatore</Text>
        <Text>Jaipur</Text>
        <Text>Cochin</Text>
        <Text>Vijayawada</Text>
        <Text>Visakhapatnam</Text>
       
    </Flex>

    <Text>We Will Sell Only the meat that we would eat ouselves</Text>
    <Text>At Licious We're big . We Mean huge.So when it comes to the meat we put on yout plate , we're extremely picky. Every Single Product is Hnadpiced by a team with years of expeicnec</Text>



<br /> 
<hr />
<br />
<Flex
 display={dis} 
 flexDirection={flex} 
style={{display:'flex'}}>
<Image  src="https://www.licious.in/img/rebranding/copyright2.png" alt="https://www.licious.in/img/rebranding/copyright2.png" /><Text>
    2022 Delightful Gourmet Pvt Ltd .All Rights Reserved
</Text>
</Flex>

<Text>
    Licious is your one-stop fresh meat deluvery shop in here you get nothing but the freshest meat & seafood .deliverd stratight to yout dooordst  now  fnsdfo NNcoa Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam eveniet totam pariatur obcaecati nihil nulla, consequuntur aliquam quod natus cumque temporibus dicta quia porro sunt recusandae libero, nam necessitatibus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo delectus illo facilis voluptate ducimus sint quos itaque doloribus dolorem sed nulla, illum inventore blanditiis ipsam dicta quisquam quibusdam?
</Text>










        </>
    )
};
export default Footer;