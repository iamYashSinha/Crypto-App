import React, { useState } from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  VStack,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Footer() {
  const avatarSrc = "https://avatars.githubusercontent.com/u/71075101";
  const userName = "Yash Sinha";
  const profileUrl = "https://github.com/IamYashSinha";
  const [hovered, setHovered] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <Box
      bgColor={colorMode === "light" ? "gray.200" : "blackAlpha.900"}
      color={colorMode === "light" ? "black" : "whiteAlpha.700"}
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
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Avatar
                boxSize={"28"}
                mt={["4", "0"]}
                src={avatarSrc}
                boxShadow={hovered ? "0 0 8px 2px rgba(0, 0, 0, 0.3)" : "none"}
              />
            </a>
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Text textDecoration={hovered ? "underline" : "none"}>{userName}</Text>
            </a>
          </VStack>
        </Stack>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          position="fixed"
          bottom="4"
          right="4"
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        />
      </Box>
  )
}
