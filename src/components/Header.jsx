import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
    HStack
  } from '@chakra-ui/react'
import {BiGhost, BiMenuAltLeft, BiOutline} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
        <Button colorScheme='purple'
        zIndex={'overlay'}
        pos={'fixed'}
        top={4}
        left={4}
        p={2}
        w={8}
        h={8}
        onClick={onOpen}><BiMenuAltLeft size={80}/></Button>

<Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>WatchIt</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/upload'}>Upload Videos</Link>
                    </Button>

                </VStack>
                <HStack position={'absolute'} bottom={18}>
                <Button  onClick={onClose}colorScheme='purple' >
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'outline'} >
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>

                </HStack>

            </DrawerBody>
        </DrawerContent>
      </Drawer>
        

    </>
  )
}

export default Header