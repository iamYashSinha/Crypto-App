import React from 'react'
import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
export default function CoinsCard({id, img, name, symbol, current_price, currencySymbol="₹"}) {
  return (
    <Link to={`/coins/${id}`}>
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
          {symbol}
        </Heading>
        <Text noOfLines={1}> {name} </Text>
        <Text noOfLines={1}> {current_price? `${currencySymbol}${current_price}`: "NA"} </Text>
      </VStack>
    </Link>
  )
}
