import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>WatchIt</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'} />
                
                
                <Input type='text' placeholder='Name' required  focusBorderColor='purple.500'/>

                <Input type='email' placeholder='Email' required  focusBorderColor='purple.500'/>
                <Input type='password' placeholder='Password' required  focusBorderColor='purple.500'/>

                <Button colorScheme='purple' type='submit'>
                    Sign Up
                </Button>
                <Text textAlign={'right'}>
                    Already Signed up?&nbsp;

                    <Button variant={'link'} colorScheme={'purple'}>
                    <Link to={'/login'} >
                     Log In

                    </Link>
                </Button>
                </Text>
                
                

            </VStack>
        </form>
    </Container>
  )
}

export default Signup