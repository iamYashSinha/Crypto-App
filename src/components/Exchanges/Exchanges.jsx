import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../index";
import { Container, HStack, Button } from "@chakra-ui/react";
import Loader from "../Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "../Error/ErrorComponent";
import SearchBar from "../SearchBar";
export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const updateKeyword = (keyword) => {
     const filtered = exchanges.filter(exchanges => {
      return `${exchanges.name.toLowerCase()}}`.includes(keyword.toLowerCase());
     })

     if(keyword === ""){
      fetchExchanges();
     }

     setKeyword(keyword);
     setExchanges(filtered);
  }
   
    const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

   //for pagination 
   const btns = new Array(100).fill(1)

  const fetchExchanges = async () => {
    try {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      setLoading(false);
      
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={"Error while fetching exchanges "}/>;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <SearchBar value={keyword} onChange={updateKeyword} placeholder="Search Exchanges"/>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
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
