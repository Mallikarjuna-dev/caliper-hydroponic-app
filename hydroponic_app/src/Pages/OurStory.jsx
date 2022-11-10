import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <Box fontFamily="Heebo, sans-serif">
            <Box textAlign="center" border="1px solid transparent"
                mt="30px"
                bgRepeat="repeat"
                bgSize="contain"
                bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsRquzZEhFDPCX9cO2A2yqfnCP0e74ZrBWQ&usqp=CAU"
                width="100%"
                height="350px">
                <Text mt="120px" fontSize="40px" fontWeight="600" color="#ffffff">About Us</Text>
                <Flex mt="10px" justifyContent="center" fontSize="15px" fontWeight="600" color="#ffffff">
                    <Link to='/' ><Text mr="5px">HOME</Text></Link>
                    <Text>| ABOUT</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default OurStory
