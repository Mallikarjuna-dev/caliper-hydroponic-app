import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon } from "@chakra-ui/icons"

const Services = () => {
    return (
        <Box fontFamily="Heebo, sans-serif">
            <Box textAlign="center" border="1px solid transparent"
                mt="30px"
                bgRepeat="repeat"
                bgSize="contain"
                bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7sxj3mnauEdAtV6glUl8Z2aPPsmwE207Xg&usqp=CAU"
                width="100%"
                height="350px">
                <Text mt="120px" fontSize="40px" fontWeight="600" color="#ffffff">Services</Text>
                <Flex mt="10px" justifyContent="center" fontSize="15px" fontWeight="600" color="#ffffff">
                    <Link to='/' ><Text mr="5px">HOME</Text></Link>
                    <Text>| SERVICES</Text></Flex>
            </Box>

            <Box border="1px solid transparent" m="auto" mt="100px" mb="120px" width="50%">
                <Image src="https://nowafarms.in/assets/img/services/s11.jpg" />
                <Box border="1px solid transparent" boxShadow='lg' p='6' rounded='md' bg='white'>
                    <Box m="5px" mt="10px" textAlign="left" >
                        <Text fontSize="28px" fontWeight="600" mt="8px" lineHeight="34px" color="#232323">Hydroponic Farm infrastructure Providers</Text>
                    </Box>

                    <Box textAlign="start" mb="25px" mt="10px">
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">NFT manufacturing, installation and commissioning.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Cocopith growing – Grow bags for Fruits, Troughs for Leafy greens.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Vertical farming using Aeroponics.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Installation and commissioning of Aquaponics farms.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Supply and installation of DUTCH buckets.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Setup a DWC farm for leafy greens.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Supply of technical grade hydroponics nutrients and residual free pesticides.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Polyhouse designing and installation.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Setting up indoor farms using High quality Artificial Growing Lights.</Text>
                        </Flex>
                    </Box>

                    <Box m="5px" textAlign="left" >
                        <Text fontSize="28px" fontWeight="600" mt="8px" lineHeight="34px" color="#232323">Operations and Management</Text>
                    </Box>
                    <Box textAlign="start" mb="25px" mt="10px">
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Maintenance and operations of hydroponics farms.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Providing trained resources to manage the day to day operations of the hydroponic /aquaponics farm.</Text>
                        </Flex>
                    </Box>

                    <Grid Grid mt="20px" mb="30px" templateColumns='repeat(3, 1fr)' gap={6} >
                        <GridItem w='100%' >
                            <Image src="https://nowafarms.in/assets/img/gallery/123.jpg" />
                        </GridItem>
                        <GridItem w='100%' >
                            <Image src="https://nowafarms.in/assets/img/gallery/456.jpg" />
                        </GridItem>
                        <GridItem w='100%' >
                            <Image src="https://nowafarms.in/assets/img/gallery/789.jpg" />
                        </GridItem>
                    </Grid>

                    <Box m="5px" textAlign="left" >
                        <Text fontSize="28px" fontWeight="600" mt="8px" lineHeight="34px" color="#232323">Consultations</Text>
                    </Box>
                    <Box textAlign="start" mb="25px" mt="10px">
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Project consultation.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Agronomy and Horticulture consultation.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="19px" mr="8px" color="orange.300" />
                            <Text mt="12px" fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Market Connect consultation.</Text>
                        </Flex>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Services



