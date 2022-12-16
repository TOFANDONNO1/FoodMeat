import Navbar from "../components/Navbar";
import "./home.scss";
import { Box, Button,Text, ButtonGroup ,Flex,WrapItem, Link, Stack} from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Image,
} from "@chakra-ui/react";
import { Grid, GridItem, center } from "@chakra-ui/react";

import foodmeat from "../food-meat-low-resolution-color-logo.png";
import Footer from "../components/Footer";
import AllRoutes from "./AllRoutes";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

const data1st = [
  {
    IMGNAME:
      "	https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png",
    PRODUCTNAME: "Todays Deals",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    PRODUCTNAME: "Chicken",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    PRODUCTNAME: "Fish & Seafood",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    PRODUCTNAME: "Mutton",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    PRODUCTNAME: "Ready to Cook",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    PRODUCTNAME: "Prawns",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    PRODUCTNAME: "Cold Cuts",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    PRODUCTNAME: "Spreads",
  },
  {
    IMGNAME: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    PRODUCTNAME: "Eggs",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    PRODUCTNAME: "Biryani & Kebab",
  },
  {
    IMGNAME:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    PRODUCTNAME: "Plant Based Meat",
  },
  {
    IMGNAME: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    PRODUCTNAME: "Meat Masala",
  },
];

const BestSellers=[
    {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "item-desc": "Fresh Nakhre & fresh bone-in & boneless  cuts",
        "net-weight": "500gms",
        rupee: "0159",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
    
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
        'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces (Large Pack)",
        "item-desc": "Bone-in chunky pieces of skinless chicken",
        "net-weight": "1000gms",
        rupee: "0299",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
        'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp',
        "productname": "Chicken Breast - Boneless",
        "item-desc": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      }
    
    
];
const BonelessCuts=[
    {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp',
        "productname": "Chicken Thigh Boneless",
        "item-desc": "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
        "net-weight": "500gms",
        rupee: "0159",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
    
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
        'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3e9023d4-e2f7-2fe6-c68f-75014733ff7e/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp',
        "productname": "Chicken Mince (Keema)",
        "item-desc": "Tender, perfectly ground meat from our Nakhrebaaz team!",
        "net-weight": "400gms",
        rupee: "0299",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
        'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/06467851-b012-3b3f-0f74-5c758afa2603/original/p1_tile_images-25.jpg?format=webp',
        "productname": "Seer (Vanjaram/Surmai) Large - Boneless Cubes",
        "item-desc": "Also called Surmai, Vanjaram, Neymeen, Anjal, Ser Maach",
        "net-weight": "450gms",
        rupee: "0369",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      }
    
    
];

const Breakfasst=[ {
    
    'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee95638-21fd-1706-4569-ed42430fd716/original/Sriracha-chicken-spreadsTIle-image.jpg?format=webp',
    "productname": "Chunky Sriracha Chicken Spreads",
    "item-desc": "Freshly cooked chicken in a creamy, spicy sriracha base.",
    // "net-weight": "500gms",
    p:'Pieces: 1',
    rupee: "0159",
    "rupee 2": "MRP:",
    "add-to-cart": "Add To Cart",

    "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
    message: "Today in",
  },
  {
    'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/faa6ff18-1108-6acf-4885-aa0fdb5e13ec/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp',
    "productname": "Chunky Shawarma Chicken Spread",
    "item-desc": "A creamy base with freshlythe sweet chilly dispersion of cracked black pepper pieces and garlic.",
    // "net-weight": "400gms",
    p:'Pie: 1',
    rupee: "0299",
    "rupee 2": "MRP:",
    "add-to-cart": "Add To Cart",
    "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
    message: "Today in",
  },
  {
    'img':'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp',
    "productname": "Chunky Continental Chicken Spread",
    "item-desc": "A Nakhrebaaz chef's creation: Real chicken & mega flavou",
    // "net-weight": "450gms",
    p:'Pie: 1',
    rupee: "0369",
    "rupee 2": "MRP:",
    "add-to-cart": "Add To Cart",
    "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
    message: "Today in",
  }


];

const CheckBlog=[
    {
        img:'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_669590515.jpg',
        des:'Are Prawns and Shimps Really All That DIfferent ? Find  Out Here!'
    },
    {
        img:'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1502598560.jpg',
        des:'These Chicken Spring Rolls Are SO Good , They sall Put a Spring in Yout Step!'
    },
    {
        img:'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2132499279.jpg',
        des:'Chicken Roll: A Scrumptious Go-To Meal That`s Easy To Make at Home'
    },
];
const IntheNews=[
    {
        img:'https://d2407na1z3fc0t.cloudfront.net/inTheNews/37/inthenews_62aae0b741820',
        des:'Are Prawns and Shimps Really All That DIfferent ? Find  Out Here!'
    },
    {
        img:'https://d2407na1z3fc0t.cloudfront.net/inTheNews/38/inthenews_62aae10540001',
        des:'These Chicken Spring Rolls Are SO Good , They sall Put a Spring in Yout Step!'
    },
    {
        img:'https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e',
        des:'Chicken Roll: A Scrumptious Go-To Meal That`s Easy To Make at Home'
    },
    {
        img:'https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4',
        des:'Are Prawns and Shimps Really All That DIfferent ? Find  Out Here!'
    },
    {
        img:'https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa',
        des:'These Chicken Spring Rolls Are SO Good , They sall Put a Spring in Yout Step!'
    },
   
];
const dis={ base: 'flex', md: 'flex',lg:'flex',xl:'grid' }
const  flex={base:"column" ,md:'column',lg:"row",xl:'row'};














function Home() {

const {adddatasForCart,cartData}=useContext(AuthContext);


const handleClick=(e)=>{
 adddatasForCart(e);
};
console.log(cartData)



  return (
    <div>
    
      {/* <Button >
      <Link href={'/login'}>
      chicken
      </Link>
     </Button> */}
     
      <Navbar />
      {/* <AllRoutes/> */}
     <br />
     <br />
     
     
     <br />



      <hr />
      <img style={{border:'1px solid red'}}
        src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
        alt="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
      />
      <br />
      <br />
      <div className="main-div">
<b 
// style={{fontSize:"25px"}}
style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}
>Shop by categories</b>
<h1>Freshest meats just for you</h1>

<Flex
  display={dis} 
  flexDirection={flex} 
className="data1st">
    {data1st.map((e)=> 
    <Box  key={e.PRODUCTNAME+e.img}>
       <Box 
       key={e.PRODUCTNAME}
       >
        <Image src={e.IMGNAME} alt={e.PRODUCTNAME} /></Box> 
        <Text>{e.PRODUCTNAME}</Text>
    </Box>
    )}

</Flex>

<div className="joindiv">
    <div>
        <img src={foodmeat} alt="LOGO"/>
      
      <Button style={{marginTop:"5%"}} colorScheme='pink'>JOIN NOW</Button>
   
    </div>
    <div>join MEATOPIA to get free delivery on alll orders with cart value more than Rs.99</div>
</div>

<div className="HowProduct">
    <h1>Premium Produce</h1>
    <h1>Works-Class Central Production Unit</h1>
    <h1>

      
        <Button colorScheme='pink' variant='ghost'>
        Know The Licious Way
  </Button>
        <div>150 Quality Checks</div>
        <Button colorScheme='teal' variant='outline'>
    Discover How
  </Button>

    </h1>
    <h1>Delivered Fresh EveryDay</h1>
    <h1>Extraordinary Cooking</h1>
</div>


   <img style={{
    marginLeft:'7%',
    borderRadius:'15px'
   }} src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp" alt="" />




<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>Best Sellers</b>
<Flex   display={dis} 
        flexDirection={flex}  className="BestSellers">
    {BestSellers.map((e)=>
    <Box
    key={e.productname+e.img}
    >
        <Box>
            <Image src={e.img} alt={e.productname}/>
        </Box>
        <Box>
            <Text>{e.productname}</Text>
        </Box>
        <Box>
            <Text>{e["item-desc"]}</Text>
        </Box>
        <Box><Text>{e["net-weight"]}</Text></Box>
        <Box>
            <Box>{e["rupee 2"]+e.rupee}</Box>
            <Box>  <Button colorScheme='pink'
              onClick={()=>handleClick(e)}
            >ADD TO CART</Button></Box>
        </Box>
        <Box>
            <Image src={e["scooter src"]} alt="" />{e.message}
        </Box>
    </Box>
    )}
    
</Flex>

<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>Boneless Cuts</b>
<Flex 
  display={dis} 
  flexDirection={flex} 
className="BestSellers">
    {BonelessCuts.map((e)=>
    <Box 
    key={e.productname+e.img}
    >
        <Box>
            <Image src={e.img} alt={e.productname}/>
        </Box>
        <Box>
            <Text>{e.productname}</Text>
        </Box>
        <Box>
            <Text>{e["item-desc"]}</Text>
        </Box>
        <Box><Text>{e["net-weight"]}</Text></Box>
        <Box>
            <Box>{e["rupee 2"]+e.rupee}</Box>
            <Box>  <Button colorScheme='pink'
              onClick={()=>handleClick(e)}
            >ADD TO CART</Button></Box>
        </Box>
        <Box>
            <Image src={e["scooter src"]} alt="" />{e.message}
        </Box>
    </Box>
    )}
    
</Flex>

<div className="MyRewards">
    <div>
        <div>
            <img src='https://www.licious.in/img/rebranding/rewards/rewards_icon.svg' alt={'LOGO'}/>
        </div>
        <div>
            <b>My Rewards</b>
            <p>Place an order and win your next reward!</p>
        </div>
        
    </div>
    <div>Click To View </div>
</div>

<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>Explore By Categor</b>


<Flex 

display={dis} 
flexDirection={flex} 
className="data1st">
    {data1st.map((e)=> 
    <Box
    key={e.PRODUCTNAME+e.IMGNAME}
    >
       <Box><Image src={e.IMGNAME} alt={e.PRODUCTNAME} /></Box> 
        <Text>{e.PRODUCTNAME}</Text>
    </Box>
    )}

</Flex>


<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>Breakfasst & Snacking Specials</b>

<Flex 

display={dis} 
flexDirection={flex} 
className="BestSellers">
    {Breakfasst.map((e)=>
    <Box
    key={e.productname+e.img}
    >
        <Box>
            <Image src={e.img} alt={e.productname}/>
        </Box>
        <Box>
            <Text>{e.productname}</Text>
        </Box>
        <Box>
            <Text>{e["item-desc"]}</Text>
        </Box>
        <Box><Text>{e["p"]}</Text></Box>
        <Box>
            <Box>{e["rupee 2"]+e.rupee}</Box>
            <Box>  <Button colorScheme='pink'
            

            onClick={()=>handleClick(e)}

            >ADD TO CART</Button></Box>
        </Box>
        <Box>
            <Image src={e["scooter src"]} alt="" />{e.message}
        </Box>
    </Box>
    )}
    
</Flex>
<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>Check Out Out Blog</b>

   <Flex 
   
   display={ {base: 'flex', md: 'flex' }}
     flexDirection={{base:"column" ,md:'row'}}
 
   className="Blog">{CheckBlog.map((e)=>
    
    <Box 
    key={e.des+e.img}
    ><Image src={e.img} alt={e.des} />
     
     <Text>{e.des}</Text></Box>
     
     )
 
     }</Flex> 
 


<Link
href="/login"
>
<Image 
src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"
></Image>
</Link>
{/* <img  alt="" /> */}



<b style={{
    display:'flex',
    justifyContent: 'start',
    textAlign: "start",
    fontSize:'30px'
 ,
      
}}>In the News</b>
<Flex
display={{base: 'flex', md: 'flex' }}
flexDirection={{base:"column" ,md:'row'}}
className="News">
    {
        IntheNews.map((e)=>
        <Box
        key={e.des+e.img}
        >
        <Image src={e.img} alt={e.des}/>
        <Text>{e.des}</Text>
    </Box>
        )
    }
   
    
</Flex>

<Footer/>








      </div>
    </div>
  );
}
export default Home;
