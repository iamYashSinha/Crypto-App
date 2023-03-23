import { Box, Container, HStack, Radio, RadioGroup, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { server } from "../../index";
import Loader from '../Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorComponent from '../Error/ErrorComponent';
import Chart from '../Charts/Chart';

export default function CoinDetails() {
    
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol = currency === "inr"?"₹":currency==="eur"?"€":"$";

  const params = useParams()

  
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        
        const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        
        console.log(data)
        setCoin(data);
        setChartArray(chartData.prices);

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency]);

  if(error) return <ErrorComponent message={"Error While Fetching Coin Details"} />

  return (
     <Container maxW={'container.xl'}>
       {
        loading? <Loader /> : (
         <>
         <Box width={"full"} borderWidth={1}> 
          <Chart arr={chartArray}  currency={currencySymbol} days={days}/>
         </Box>

         <RadioGroup value={currency} onChange={setCurrency} p={8}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>₹INR</Radio>
            <Radio value={"eur"}>€EUR</Radio>
            <Radio value={"usd"}>$USD</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
        <Text fontSize={"small"} alignSelf="center" opacity={"0.7"}>
          Last Updated on {" "} {Date(coin.market_data.last_updated).split("G")[0]}
        </Text>

        <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"}/>

        <Stat>
           <StatLabel>{coin.name}</StatLabel>
           <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
           <StatHelpText>
            <StatArrow type={coin.market_data.price_change_percentage_24h_in_currency>0? "increase" : "decrease"}/>
            {coin.market_data.price_change_percentage_24h_in_currency[currency]}%
           </StatHelpText>
        </Stat> 
        
        <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
          {`#${coin.market_cap_rank}`}
        </Badge>

        <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>

        <Box w={"full"} p={"4"}>
         <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
         <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
         <Item title={"Market Cap "} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
         <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
         <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>
        </Box>

        </VStack>
         </>
        )
       }

     </Container>
  )
}

const Item = ({title, value})=>(
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
)

const CustomBar = ({high, low})=>(
  <VStack w={"full"}>
    <Progress value={50} colorScheme={'teal'} w={"full"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
    <Badge children={low} colorScheme={"red"} />
    <Text fontSize={"sm"}>24H Range</Text>
    <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
)