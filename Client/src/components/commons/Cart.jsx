import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Portal } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import prot1 from '../../assets/images/prot1.png'
import iconcart from '../../assets/images/iconcart.svg'
import { Icon } from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineShoppingCart } from'react-icons/ai'


import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

function InternalStateEx() {
  const initRef = React.useRef()
  return (
    <>
     
     
     

     

      <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
           <PopoverTrigger>
              <Button> <Icon as={BiUser}/></Button>
            </PopoverTrigger>
            <PopoverTrigger>
              <Button> <Icon as={AiOutlineHeart}/></Button>
            </PopoverTrigger>
            <PopoverTrigger>
              <Button> <Icon as={AiOutlineShoppingCart}/></Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>Cart</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                    <img src={prot1} className="img1" alt="img1" />
                    Excelente combinación de diferentes tipos de proteína con extra de glutamina.
                  </Box>
                  <Button
                    mt={4}
                    color='white'
                    bg='#FF7E1B'
                    onClick={onClose}
                    ref={initRef}
                  >
                    Checkout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </ >
  )
}
export default InternalStateEx