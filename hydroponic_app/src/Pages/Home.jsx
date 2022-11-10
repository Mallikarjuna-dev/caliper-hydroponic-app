import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import WithAction from '../Components/Navbar'
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons"

const Home = () => {
    return (
        <Box fontFamily="Heebo, sans-serif">
            <Box height="900px"
                backgroundImage="https://nowafarms.in/assets/img/services/s11.jpg"
                backgroundRepeat="no-repeat"
                backgroundPosition="center" pt="210px" textAlign="center" >
                <Text fontWeight="100" color="#ffffff" lineHeight="100px" fontSize="90px">HYDROPONIC FARM</Text>
                <Text fontWeight="700" color="#f1cf69" fontSize="90px">COMPANY</Text>
                <Text m="auto" color="#ffffff" width="30%" fontSize="18px">Hydroponic farm setup specialists in NFT, DUTCH Buckets and DWC Methods.</Text>
                <Box mt="20px">
                    <Text color="#ffffff"> <ArrowForwardIcon borderRadius="50" p="14px" bgColor="black" fontSize="50px" mr="15px" />DISCOVER MORE</Text>
                </Box>
            </Box>
            <Box backgroundImage="https://nowafarms.in/assets/img/shape/6.png">
                <Box height="400px" m="auto" width="60%" border="1px solid transparent">
                    <Flex>
                        <Box mt="160px" textAlign="left" border="1px solid transparent" width="48%">
                            <Text fontWeight="600" fontSize="20px" color="#666666">WHAT WE DO</Text>
                            <Text fontWeight="600" fontSize="40" color="#232323">WHY HYDROPONICS</Text>
                        </Box>
                        <Box mt="90px" width="54%" border="1px solid transparent">
                            <Text lineHeight="25px" p="10px" textAlign="initial" fontWeight="400" fontSize="15px" color="#666666">Plants grown in soil need a more space to spread out as the roots reach out as far as possible into the soil to capture as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your plants receive, or which nutrients they benefit from in the process.</Text>
                            <Button p="25px 30px" backgroundColor="orange.300" borderRadius="25" _hover={{
                                bgColor: "orange",
                            }} mt="25px" ml="-360px">View All<ChevronRightIcon ml="5px" fontSize="21px" /></Button>
                        </Box>
                    </Flex>
                </Box >
            </Box>
            <Box
                backgroundImage="https://nowafarms.in/assets/img/shape/6.png"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
            >
                <Box>
                    <Flex p="8px" gap="20px">
                        <Box height="350px" width="28%"></Box>
                        <Box bgImage="https://nowafarms.in/assets/img/gallery/01.jpg" height="350px" width="30%">
                            <Text fontSize="20px" fontWeight="900" color="#ffffff" lineHeight="24px" mt="270px">HYDROPONICS</Text>
                            <Text fontSize="20px" fontWeight="200" color="#ffffff" lineHeight="24px">Products</Text>
                        </Box>
                        <Box bgImage="https://nowafarms.in/assets/img/gallery/aa1.jpg" height="350px" width="30%">
                            <Text fontSize="20px" fontWeight="900" color="#ffffff" lineHeight="24px" mt="40px">PESTICIDE</Text>
                            <Text fontSize="20px" fontWeight="200" color="#ffffff" lineHeight="24px">Free</Text>
                        </Box>
                        <Box bgImage="https://nowafarms.in/assets/img/gallery/aa2.jpg" height="350px" width="30%">
                            <Text fontSize="20px" fontWeight="900" color="#ffffff" lineHeight="24px" mt="270px">LOCALLY</Text>
                            <Text fontSize="20px" fontWeight="200" color="#ffffff" lineHeight="24px">Grown</Text>
                        </Box>
                        <Box bgImage="https://nowafarms.in/assets/img/gallery/aa3.jpg" height="350px" width="30%">
                            <Text fontSize="20px" fontWeight="900" color="#ffffff" lineHeight="24px" mt="40px">100 PERCENT</Text>
                            <Text fontSize="20px" fontWeight="200" color="#ffffff" lineHeight="24px">Usable</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box m="auto" mt="35px" height="610px" width="75%" >
                    <Flex>
                        <Box width="48%" height="100%" >
                            <Image src="https://nowafarms.in/assets/img/about/nowafarm.jpg" />
                        </Box>
                        <Box ml="50px" width="500px" textAlign="start">
                            <Text mt="160px" fontSize="18px" fontWeight="600" color="#666666">WHY CHOOSE US</Text>
                            <Text mt="10px" fontSize="40px" fontWeight="600" color="black">About Nowafarm</Text>
                            <Text mt="10px" fontSize="15px" fontWeight="400" lineHeight="28px" color="#666666">NOWA Farms is India's leading end-to- end Hydroponic Solutions Provider. From setting up of Turnkey Projects, to Undertaking O&M, and Marketing Hydroponic Produce through our vast network, we support our clients from Seed to Fruit.</Text>
                            <Text mt="10px" fontSize="15px" fontWeight="400" lineHeight="26px" color="#666666">We use Hydroponics, Aquaponics and Vertical Growing Solutions to grow fresh high value and high yield vegetables, herbs, leafy greens and fruits in a limited space</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box>
                <Box></Box>
                <Box>
                    <Grid templateColumns='repeat(4, 1fr)' gap={8}>
                        <GridItem w='100%' h='370' >
                            <Image src="https://nowafarms.in/assets/img/gallery/gg1.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370' >
                            <Image src="https://nowafarms.in/assets/img/gallery/g2.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/gg2.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/g4.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/gg3.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/08.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/11.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/gg7.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/14.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/gg8.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/17.jpg" />
                        </GridItem>
                        <GridItem w='100%' h='370'>
                            <Image src="https://nowafarms.in/assets/img/gallery/gg9.jpg" />
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box >
    )
}

export default Home
