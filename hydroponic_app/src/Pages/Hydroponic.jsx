import { Box, Flex, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon } from "@chakra-ui/icons"

const Hydroponic = () => {
    return (
        <Box fontFamily="Heebo, sans-serif">
            <Box textAlign="center" border="1px solid transparent"
                mt="30px"
                bgRepeat="repeat"
                bgSize="contain"
                bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzAkHhgwnaBn2c8UXx2XzxL2vWs7J4byIiw&usqp=CAU"
                width="100%"
                height="350px">
                <Text mt="120px" fontSize="40px" fontWeight="600" color="#ffffff">Hydroponic Farm</Text>
                <Flex mt="10px" justifyContent="center" fontSize="15px" fontWeight="600" color="#ffffff">
                    <Link to='/' ><Text mr="5px">HOME</Text></Link>
                    <Text>| HYDROPONIC FARM</Text></Flex>
            </Box>

            <Box border="1px solid transparent" m="auto" mt="100px" mb="120px" width="50%">
                <Image src="https://nowafarms.in/assets/img/blog/blog11.jpg" />
                <Box border="1px solid transparent" boxShadow='lg' p='6' rounded='md' bg='white'>
                    <Box m="5px" textAlign="left" >
                        <Text fontSize="28px" fontWeight="600" mt="8px" color="#232323">BENIFITS of SOLILESS CULTIVATION</Text>
                        <Text fontSize="24px" fontWeight="600" mt="12px" color="#232323">WHY HYDROPONICS</Text>
                        <Text fontSize="15px" fontWeight="400" lineHeight="29px" mt="8px" color="#666">Plants grown in soil need more space for its roots to spread out as the roots reach out as far as possible into the soil to capture as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your plants receive, or which nutrients they benefit from in the process.</Text>
                        <Text fontSize="15px" fontWeight="400" lineHeight="29px" mt="15px" color="#666">Hydroponics addresses this problem by eliminating soil and providing nutrient rich water directly to plant roots through efficient and modern systems. This helps save up to 90% of water and nutrients. Moreover, since the roots are not as spread out, plants can be grown closer to each other, thus increasing the productivity of the land.</Text>
                    </Box>

                    <Grid mt="20px" templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/02.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/100.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/15.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/19.jpg" />
                        </GridItem>
                    </Grid>

                    <Box textAlign="start" mb="50px" mt="50px">
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Maximizes Space: Hydroponics requires far less space than plants grown in soil. Can stage the growth of plants to harvest them daily weekly and monthly.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Conserves Water: Conserves 90% of water compared to soil farming.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Facilitates a Micro-Climate: Ensures all 3 required parameters (Weather, Water and Nutrients) are controlled and provided proportionately.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Produces Higher Yields: Since the growth is focussed on the leaf and fruit side, due to easy and direct availability of nutrients.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Requires Less Labor: Due to automation, process repeatibility and controlled indoor environment.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Promotes safety: As the soil-less process completely eliminates the soil borne pests and the need to periodically replenish soil.</Text>
                        </Flex>
                        <Flex>
                            <CheckIcon mt="7px" mr="8px" color="orange.300" />
                            <Text fontSize="14px" fontWeight="400" lineHeight="29px" color="#232323">Reduces Supply Chain challenges: Farms can be setup in the heart of the city, or in its periphery, where the dead and unused land is put too GOOD USE, resulting in Fresh, Clean and Healthy produce with fast delivery times.</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hydroponic
