import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChatIcon } from '@chakra-ui/icons';
import Home from '../Pages/Home';
import { Link as Rlink } from 'react-router-dom';

const Links = ['OUR STORY', 'HYDROPONIC FORM', 'SERVICES', 'DASHBOARD', 'TEAM'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box position="fixed" bg={useColorModeValue('gray.100', 'gray.900')} width="100%" px={4} height="90px" pt={"9px"} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Menu >
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                                <Avatar
                                    ml={"45px"}
                                    size={'md'}
                                    mt={"13px"}
                                    src={
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflulHNBLZ9bIypN--a1WIUIBa6J18qLj5jQ&usqp=CAU'
                                    }
                                />
                            </MenuButton>
                        </Menu>
                        <Box fontSize="28px" fontStyle="oblique" fontWeight="900px" fontFamily="monospace" >AcmeFresh</Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/"><Text>HOME</Text></Rlink>
                        </Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/about-us"><Text>OUR STORY</Text></Rlink>
                        </Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/hydroponicfarm"><Text>HYDROPONIC FORM</Text></Rlink>
                        </Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/services"><Text>SERVICES</Text></Rlink>
                        </Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/"><Text>DASHBOARD</Text></Rlink>
                        </Box>
                        <Box px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}>
                            <Rlink to="/"><Text>CONTACT US</Text></Rlink>
                        </Box>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'orange'}
                            size={'sm'}
                            //mr={4}
                            p="25px"
                            mr={"100px"}
                            mt={"14px"}
                            borderRadius="12"
                            leftIcon={<ChatIcon />}>
                            Enquiry
                        </Button>
                    </Flex>
                </Flex>
            </Box>

            <Box p={4}>Main Content Here</Box>
        </>
    );
}