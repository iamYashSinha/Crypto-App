import React from 'react'
import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
export default function Footer() {
   
    const avatarSrc = "https://avatars.githubusercontent.com/u/71075101";
    const userName = "Yash Sinha";
    const profileUrl = "https://github.com/IamYashSinha";

  return (
    <Box
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
      <VStack w={"full"} alignItems={["center", "flex-start"]} position={"sticky"}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}
        >
          We are the best crypto trading app in India, we provide our guidance
          at a very cheap price.
        </Text>
      </VStack>

      <VStack>
       <a href={profileUrl} target='blank'> <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} /> </a> 
        <a href={profileUrl} target='blank'><Text>{userName}</Text></a>
      </VStack>
    </Stack>
  </Box>
  )
}
