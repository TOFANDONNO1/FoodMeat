import { Box, Button,Text,   Image,Flex, Link,} from '@chakra-ui/react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BestSellers=[
    {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      }
      ,
      {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      }
      ,
      {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      },
      {
    
        'img':'	https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        "productname": "Chicken Curry Cut - Small Pieces",
        "des": "Fresh Nakhre & fresh bone-in & boneless  cuts",
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
        "des": "Bone-in chunky pieces of skinless chicken",
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
        "des": "Boneless fillets: special nakhre for special cuts",
        "net-weight": "450gms",
        rupee: "0269",
        "rupee 2": "MRP:",
        "add-to-cart": "Add To Cart",
        "scooter src": "https://www.licious.in/img/rebranding/express_delivery.svg",
        message: "Today in",
      }
    
    
];

function ChickenPage(){


    const dis={ base: 'flex', md: 'flex',lg:'flex',xl:'grid' }
    const  flex={base:"column" ,md:'column',lg:"row",xl:'row'};
    let arr=JSON.parse(localStorage.getItem('data'))||[];


    const handleClick=(e)=>{
   
  
    arr.push(e)

     localStorage.setItem('data', JSON.stringify(arr))
    
    };


    return(
        <>
       <Navbar/>
       <br />
       <br />
       <br />
       <br />
       <hr />
        <Flex   display={dis} 
        flexDirection={flex}  className="BestSellers">
    {BestSellers.map((e)=>

    <Link href='/chickenpage'
 _hover={{textDecoration: 'none'}}
    >

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
            <Text>{e["des"]}</Text>
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
    </Link>

    )}
    
</Flex>
<br />
<hr />
<Footer/>
        </>
    )
};
export default ChickenPage;