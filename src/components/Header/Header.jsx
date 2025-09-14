import React from 'react'
import Container from '../layout/Container/Container'
import Flex from '../layout/Flex/Flex'
import { PiGreaterThan } from "react-icons/pi";

const Header = () => {
  return (
    <div>
        <Container className="py-10">
        <Flex className=' justify-between'>
            <div><PiGreaterThan /></div>
            <div>ffj</div>
        </Flex>
        </Container>
      
    </div>
  )
}

export default Header
