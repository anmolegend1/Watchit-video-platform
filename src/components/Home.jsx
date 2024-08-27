import { Box,Container,Heading,Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const HeadingOptions ={
  pos:"absolute",
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl',
}

const Home = () => {
  return (
    <Box>
        <Mycaraousel/>
        <Container maxW={'containe.xl'} minH={'100vh'} p={"16"}>
          <Heading textTransform='uppercase' py={"2"} w={"fit-content"} borderBottom={'2px solid'} m={"auto"}>
            Services
          </Heading>
          <Stack h={"full"} p={"4"} alignItems={'center'} direction={["column","row"]}>
          <Image src={img5} h={['40','400']} filter={'hue-rotate(-120deg)'} />
          <Text letterSpacing={"wideset"} lineHeight={"190%"} p={["4","16"]}>
          Welcome to our premier video watching and streaming service! Dive into an extensive library featuring the latest blockbuster movies, classic TV shows, and exclusive original series. Our platform ensures a seamless viewing experience with high-definition streaming on all your favorite devices. Whether you're at home or on the go, our user-friendly interface makes it easy to find and enjoy your favorite content.

Personalized recommendations help you discover new shows and movies tailored to your tastes, while offline viewing lets you download content to watch anytime. We prioritize quality, offering minimal buffering and fast load times, adapting to your internet speed for the best possible video quality. Join us today to explore a world of entertainment at your fingertips, and elevate your viewing experience like never before!
          </Text>

          </Stack>


        </Container>
    </Box>
  )
}

const Mycaraousel = ()=>{
    return(
      <Carousel autoPlay infiniteLoop interval={'2000'} showThumbs={false} showArrows={false} showStatus={false} >
        <Box w="full" h={'100vh'}>
        <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...HeadingOptions}> Future is Here</Heading>
        </Box>    

        <Box w="full" h={'100vh'}>
        <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.900"} color={'white'} {...HeadingOptions}> Gaming is the new Sport</Heading>
        </Box>   
        <Box w="full" h={'100vh'}>
        <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...HeadingOptions}> Experience the feel </Heading>
        </Box>  
        <Box w="full" h={'100vh'}>
        <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={"blackAlpha.300"} color={'white'} {...HeadingOptions}> World is Transforming</Heading>
        </Box>  

      </Carousel>
    )
}


export default Home