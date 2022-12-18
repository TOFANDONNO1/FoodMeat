import foodmeat from "../food-meat-low-resolution-color-logo.png"
import {Navigate} from 'react-router-dom'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    // useBreakpointValue,
    useDisclosure,
    Image,Input
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const linkHoverColor = useColorModeValue('gray.800', 'white');
  

const {Userauth}=useContext(AuthContext);


    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          
          as="header" 
          position="fixed" 
          w="100%">
            
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text> */}
        <Box>
        <Link href={'/'}>
        <Image 
                    height='50px'
      src={foodmeat}
    alt='foodmeat'
  >
 
  </Image>
 </Link>

          </Box>    
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Input width={'30%'} focusBorderColor='lime' placeholder='Search For Any Delicious Product'  
          
          />
          <Image width={'30px'} src="https://www.licious.in/img/rebranding/search-loc.png"/>
          <Stack
            flex={{ base: 1 }}
            
            justify={'center'}
            direction={'row'}
            spacing={19}>
            <Button
       
              as={'a'}
              fontSize={'xl'}
              fontWeight={500}
              variant={'link'}
              background='red'
              color={'white'}
              href={'/login'}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
              >
            {Userauth.isAuth?'Logout':'Login'}   
            </Button>

            <Link href='/cartpage'
                textDecoration= 'none'
            
            >
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              textDecoration={'none'}
              href={'/cartpage'}
              _hover={{
                textDecoration: 'none',

                bg: 'pink.300',
              }}>
            <Image src="https://www.licious.in/img/rebranding/cart_icon.svg"/> Cart
            </Button>
            </Link>
           
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    // const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}
      style={ {marginTop:'10%'}}
          >    
            <Popover  trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger
             
              >
                <Link
          backgroundColor='gray'

                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={'white'}
                  borderRadius='20px'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
//   interface {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }
  
  const NAV_ITEMS = [
    {
      label: 'Location',
      children: [
        {
          label:'KOOOOCOO'
        },
        {
          label:"NDMMFJEE"
        },
        {
            label:'DOKEN'
          },
          {
            label:"LKONKGN"
          },
          {
            label:'KKOOMM'
          },
          {
            label:"LOOOPPD"
          },
          {
            label:'AKKKA'
          },
          {
            label:"IIIOOOK"
          },
      ],
    },
    {
      label: 'Category',
      children: [
        {
          label: 'Today Deals',
          subLabel: '',
          href: 'https://www.licious.in/delicious-deals',
        },
        {
          label: 'Chicken',
          subLabel: 'Curry Cuts',
           href: '#',
        },{
            label: 'Fish & Seafood',
            subLabel: 'FreshWater',
             href: 'https://www.licious.in/seafood',
          },
          {
            label: 'Mutton',
            subLabel: 'Combos',
            href: 'https://www.licious.in/chicken',
          },
          {
            label: 'Ready to Cook',
            subLabel: 'Butge Patties',
            href: 'https://www.licious.in/seafood',
          },
          {
            label: 'Prawns',
            subLabel: 'Offals',
            href: 'https://www.licious.in/seafood',
          },
          {
            label: 'Cold CUts',
            subLabel: 'Speciality Cuts',
            href: 'https://www.licious.in/seafood',
          },
          {
            label: 'Spreads',
            subLabel: 'Cold Cuts',
            href: 'https://www.licious.in/seafood',
          },
          {
            label: 'Eggs',
            subLabel: 'Classic Eggs',
            href: 'https://www.licious.in/eggs',
          },

      ],
    },
]