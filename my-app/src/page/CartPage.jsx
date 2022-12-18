import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
function CartPage() {
  const [Count, setCount] = useState(1);
  const { cartData } = useContext(AuthContext);
  let localdata = JSON.parse(localStorage.getItem("data")) || [];
//   console.log(localdata);

  let sum = 0;
  for (let i = 0; i < localdata.length; i++) {
    sum += +localdata[i].rupee * Count;
  }
  const values = (e, index,p) => {
    // if(index===)
    // sum=sum*Coun;
    console.log(localdata[index].productname)
    if(p===localdata[index].productname){
        
        setCount(Count + e);

    }
    // console.log(index);
  };
  // console.log(sum)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    localStorage.setItem("data", JSON.stringify([]));
    localdata = JSON.parse(localStorage.getItem("data")) || [];
    // localdata=[]
  };
  const cancelRef = React.useRef();
  const dis = { base: "flex", md: "flex", lg: "flex", xl: "grid" };
  const flex = { base: "column", md: "column", lg: "row", xl: "row" };

  return (
    <>
      <Flex display={dis} flexDirection={flex} className="BestSellers">
        {localdata.map((e, index) => (
          <Box key={e.productname + e.img + Date.now() + Math.random()}>
            <Box>
              <Image src={e.img} alt={e.productname} />
            </Box>
            <Box>
              <Text>{e.productname}</Text>
            </Box>
            <Box>
              <Text>{e["des"]}</Text>
            </Box>
            <Box>
              <Text>{e["net-weight"]}</Text>
            </Box>
            <Box>
              <Box>{e["rupee 2"] + e.rupee}</Box>
              {/* <Box>  <Button colorScheme='pink'
              onClick={()=>handleClick(e)}
            >ADD TO CART</Button></Box> */}
            </Box>
            <Box>
              <Image src={e["scooter src"]} alt="" />
              {e.message}
            </Box>
            <Button onClick={() => values(1, index,e.productname)}>+</Button>
            <Button disabled>{Count}</Button>
            <Button onClick={() => values(-1, index,e.productname)} disabled={Count <= 1}>
              -
            </Button>
          </Box>
        ))}
      </Flex>

      <br />
      <br />
      <hr />
      <hr />
      <Box>
        <Text background={"green.100"} fontSize="xxx-large">
          <b>TotalAmount-:</b>
          {sum}
        </Text>
        <br />
        <hr />
        <Box onClick={handleClick}>
          <Button colorScheme="red" onClick={onOpen}>
            Checkout Yout Order
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader
                  fontSize="lg"
                  fontWeight="bold"
                ></AlertDialogHeader>

                <AlertDialogBody>yOUR oRDER sUCESSFULL</AlertDialogBody>

                <AlertDialogFooter>
                  {/* <Button ref={cancelRef} onClick={onClose}>
                
              </Button> */}
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Box>
    </>
  );
}
export default CartPage;
