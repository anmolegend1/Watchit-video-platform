import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'



const Videos = () => {

const videoArr=['https://videos.pexels.com/video-files/5377684/5377684-sd_640_360_25fps.mp4','https://videos.pexels.com/video-files/17932288/17932288-uhd_2560_1440_30fps.mp4','https://videos.pexels.com/video-files/20663902/20663902-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/25947958/11922770_640_360_60fps.mp4','https://videos.pexels.com/video-files/26593505/11967932_640_360_25fps.mp4','https://videos.pexels.com/video-files/16668409/16668409-sd_640_360_24fps.mp4','https://videos.pexels.com/video-files/19190886/19190886-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/8062958/8062958-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/26595709/11968786_640_360_25fps.mp4','https://videos.pexels.com/video-files/25745165/11904172_640_360_60fps.mp4','https://videos.pexels.com/video-files/26727469/11993981_640_360_60fps.mp4','https://videos.pexels.com/video-files/19975560/19975560-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/18951310/18951310-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4','https://videos.pexels.com/video-files/4088846/4088846-sd_640_360_25fps.mp4']    

const [videoSrc, setvideosrc]= useState(videoArr[0]);


  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'} marginLeft={'20px'} marginTop={'20px'}>
            <video controls
            controlsList='nodownload'
            src={videoSrc}
            style ={{width:'100%',}}>

            </video>
            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
            <Heading>
                Sample Video
            </Heading>
            <Text>
            This is a sample video for demo testing and this is called the description section. Welcome to our premier video streaming platform, where you'll discover an extensive library of movies, TV shows, and exclusive original series, all available in stunning high-definition. Our platform is designed with you in mind, offering a seamless and enjoyable viewing experience on any device, whether you're at home or on the go.

Our user-friendly interface makes it easy to navigate through our vast collection, while personalized recommendations help you discover new favorites tailored to your tastes. Enjoy the flexibility of offline viewing by downloading your favorite shows and movies to watch anytime, even without an internet connection. Our service also includes robust parental controls, providing a safe and family-friendly environment for viewers of all ages.

We prioritize delivering the highest quality streaming experience with minimal buffering and fast load times, adapting to your internet speed for optimal video quality. From blockbuster hits to timeless classics and innovative originals, our platform offers something for everyone. Join us today and explore a world of entertainment at your fingertips. Elevate your viewing experience with our exceptional service and never run out of amazing content to watch.
            </Text>
        </VStack>
        </VStack>
     
        <VStack w={['full','xl']} alignItems={"stretch"} p={'8'} spacing={'8'} overflowY={'auto'}>
            {videoArr.map((item,index)=>(<Button variant={'ghost'} colorScheme='purple' onClick={()=>setvideosrc(item)}> Video {index+1}</Button>))}
        </VStack>
    </Stack>
  )
}

export default Videos