"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

const MyStocks = () => {
  const { data, isLoading, error, fetchData } = useApi();
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [stockData, setStockData] = useState<any>(null);

  
  const handleSearch = async () => {
    console.log("Search Query",searchQuery)
    await fetchData(
      `https://finnhub.io/api/v1/quote?symbol=${searchQuery}&token=${process.env.NEXT_PUBLIC_FIN_API_KEY}`,
      "GET"
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log("Event",event.target.value)
    
  
    }


  useEffect(() => {
    setStockData(data?.c);
  }, [data]);

  return (    
    <div className="flex flex-col justify-start ml-70 mt-10 ">
      <h1>My Stocks</h1>
      <p className="text-gray-500 mt-3">Search for stocks</p>
      <Input className="w-65 mt-2" placeholder="Search for stocks" onChange={handleChange} />
      <Button className="mt-2 w-65" onClick={handleSearch}>
        Search
      </Button>
      <div>
        <h2>
          Current Stock: <span>{stockData}</span>
        </h2>
      </div>

      <Sidebar />
    </div>
  );
};
export default MyStocks;
