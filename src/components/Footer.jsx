import { Box, Button, DarkMode, Heading, HStack, Input, LightMode, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
import {FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'}>
        
    <Stack direction={['column', 'row']}>
    <VStack w={'full'}>
    <Heading size="md" textTransform={"uppercase"}>
    Stay Tuned for Updates
        
    </Heading>
    <HStack borderBottom={"2px solid white"} py={"2"}>
    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
        <Button p={"0"} variant={'ghost'} colorScheme='purple' borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={"20"}/>
        </Button>
    </HStack>
    </VStack>

    <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
    <Heading textAlign={'center'} size={'md'} textTransform={"uppercase"}>
        Video Hub
        
    </Heading>
    <HStack>
    <FaRegCopyright size={"15"}/>
    <Text textAlign={'center'}> All Rights Reserved</Text>
    </HStack>
   
    </VStack>
     <VStack w={'full'}>
     <Heading textAlign={'center'} size={'md'} textTransform={"uppercase"}>
        Social Media
        
    </Heading>
        {/* <Button variant={'link'} colorScheme='white'>Youtube</Button>
        <Button variant={'link'} colorScheme='white'>Instagram</Button>
        <Button variant={'link'} colorScheme='white'>Github</Button> */}
        
            <HStack><Button p={"3"} variant={'outline'} colorScheme='purple' borderRadius={' 20px 0 0  20px '}>
            <AiFillYoutube size={"20"}/>
        </Button>
        <Button p={"4"} variant={'outline'} colorScheme='purple' borderRadius={' 3px'}>
            <AiFillInstagram size={"20"}/>
        </Button>
        <Button p={"3"} variant={'outline'} colorScheme='purple' borderRadius={' 0 20px 20px  0 '} >
            <AiFillGithub size={"20"}/>
        </Button></HStack>



     </VStack>
    </Stack>

    </Box>
  )
}

export default Footer