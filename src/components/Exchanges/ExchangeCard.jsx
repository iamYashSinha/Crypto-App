import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ExchangeCard({ name, img, rank, url }) {
  return (
    <a href={url} target={"blank"}>
      <VStack
        w={52}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        mt={5}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {" "}
          {rank}{" "}
        </Heading>
        <Text noOfLines={1}> {name} </Text>
      </VStack>
    </a>
  );
}
