import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinsCard from "./CoinsCard";
import ErrorComponent from "./ErrorComponent";
import SearchBar from "./SearchBar";
export default function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr")
  const [keyword, setKeyword] = useState("");
  
  const updateKeyword = (keyword)=>{
   const filtered  = coins.filter(coins => {
    return `${coins.name.toLowerCase()} ${coins.symbol.toLowerCase()}}`.includes(keyword.toLowerCase());
   })

   if(keyword === ""){
    fetchCoins();
   }

   setKeyword(keyword);
   setCoins(filtered);
  };

  
  const fetchCoins = async () => {
    try {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}`);

      setCoins(data);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while fetching coins"}/>;

  const currencySymbol = currency === "inr"?"₹":currency==="eur"?"€":"$";

  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

  //for pagination
  const btns = new Array(132).fill(1);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <SearchBar value={keyword} placeholder={"Search Coins"}  onChange={updateKeyword}/>
        <RadioGroup value={currency} onChange={setCurrency} p={8}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>₹INR</Radio>
            <Radio value={"eur"}>€EUR</Radio>
            <Radio value={"usd"}>$USD</Radio>
          </HStack>
        </RadioGroup> 

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinsCard
                id={i.id} 
                key={i.id}
                name={i.name}
                current_price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>


          <HStack w={"full"} overflowX={"auto"} p={"8"}>
          
          {
            btns.map((item, index)=>(
             <Button 
             key={index}
             bgColor={"blackAlpha.900"} 
             color={"white"} 
             onClick={()=>changePage(index+1)}
             >
             {index+1}
              </Button>
              
            ))
          }
        
          </HStack>
        </>
      )}
    </Container>
  );
}
