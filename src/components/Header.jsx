import { Button, HStack} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div>
     <HStack p={4} shadow={'base'} bgColor={"blackAlpha.900"}>
       
       <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
       </Button>
       
       <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
       </Button>

       <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
       </Button>

       <Button variant={"unstyled"} color={"white"}>
        <Link to="/contactus">ContactUs</Link>
       </Button>

     </HStack>
    </div>
  )
}
