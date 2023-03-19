import React from 'react'
import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
export default function Footer() {
   
    const avatarSrc = "https://avatars.githubusercontent.com/u/71075101";
    const userName = "Yash Sinha";

  return (
    <Box
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
      <VStack w={"full"} alignItems={["center", "flex-start"]}>
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
        <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
        <Text>{userName}</Text>
      </VStack>
    </Stack>
  </Box>
  )
}
