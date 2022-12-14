import Navbar from "../components/Navbar";
import "./home.scss"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Image
  } from '@chakra-ui/react'
  import { Grid, GridItem,center } from '@chakra-ui/react'

  import foodmeat from "../food-meat-low-resolution-color-logo.png"






function Home(){
    return(
        <div>Homepage

<Navbar/>
<br/>
<hr/>
 <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" alt="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" />
     <br />
     <br />  
 <div className="main-div">
 {/* <div style={{margin:'3% 10% '}}> */}
 <h1 style={{font:'120px',backgroundColor:'yellowgreen'}}>Shop By Categories</h1>
        <h6>FreshEst meats just for you</h6>
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center',gridTemplateColumns:'repeat(4,1fr)'  }} >

    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}   src="https://thumbs.dreamstime.com/b/today-s-deals-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-92527294.jpg"></img> <h1>Today's Deals</h1></div>
     <div   style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://img.freepik.com/premium-photo/raw-chicken-meat-white-background_58830-691.jpg?w=2000"></img> <h1>Chicken</h1></div>
   <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}} src="https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min-750x750.jpg"></img> <h1>Fish & Seafood</h1></div>
     <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://previews.123rf.com/images/ange1011/ange10112009/ange1011200900245/155812189-raw-lamb-chops-or-mutton-cuts-on-rustic-wood-background-fresh-sheep-meat-cutlet-on-bone.jpg"></img> <h1>Mutton</h1></div>
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://www.licious.in/blog/wp-content/uploads/2021/08/Cooked_Licious_Tandoori-10.jpg"></img> <h1>Ready to Cook</h1></div>
   <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chilli-Prawns-750x750.jpg"></img> <h1>Prawns</h1></div>
  <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://upload.wikimedia.org/wikipedia/commons/2/28/13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-168.jpg"></img> <h1>Cold Cuts</h1></div>
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://www.bigbasket.com/media/uploads/p/xxl/40088416_11-hersheys-spread-cocoa.jpg"></img> <h1>Spreads</h1></div>
   <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"></img> <h1>Eggs</h1></div>
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://www.shutterstock.com/image-photo/chicken-kebab-biryani-rice-authentic-600w-645565153.jpg"></img> <h1>Biryani & Kebab</h1></div>
   <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://www.licious.in/blog/wp-content/uploads/2022/09/pbm-750x750.jpeg"></img> <h1>Plant Based Meat </h1></div>
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'  }} ><img style={{width:"250px",height:'250px'}}  src="https://m.media-amazon.com/images/I/81B2oeclw7L._SL1500_.jpg"></img> <h1>Meat Masala</h1></div>

</div>   


<div style={{background:'orange',borderRadius:"10px"}}>
    <div style={{
    
}}> 
        <div >  <Image 
        

    boxSize='50px'
    borderRadius='full'
    objectFit='cover'
    src={foodmeat}
    alt='foodmeat'
  /> </div>
        <div  style={{background:'red' ,
    margin:'auto',
    color:'white'
    }}>JOIN NOW</div>
        
    </div>
    <br />
    <hr />
    <div>Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99</div>
</div>


<div>
    <div> 
        <h1 style={{color:'orange'}}>Know The Licious Way </h1>
    </div>
    <div style={{border:'1px solid black',display:'flex',padding:'20px'}}>

        <h3 className="heading-3">PremiumProduce</h3>
        <h3 style={{padding:'20px',border:'0.5px solid orange'}}>Delivered Fresh Everyday</h3>
        <h3 style={{padding:'20px',border:'0.5px solid orange'}}>World-class Central Production Unit</h3>
        <h3 style={{padding:'20px',border:'0.5px solid orange'}}> Extraordinaty Cooking</h3>
        <h3 style={{padding:'20px',border:'0.5px solid orange'}}>150 Quality Checks</h3>
    </div>
    <div style={{color:'orange'}}>Discover How \/</div>
</div>

<div style={{display:'flex',background:"orange",gap:"10%"}}>
    <div><h1>Extra 20% Off*</h1></div>
    <div><h1>Extra 20% Off*</h1></div>
    <div><h1>Extra 20% Off*</h1></div>

</div>
























































 </div>
             
        </div>

        
    )
}
export default Home;