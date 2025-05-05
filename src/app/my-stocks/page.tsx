"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApi } from "@/hooks/useApi";
import { useCallback, useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  closePrice: {
    label: "Close Price",
    color: "blue",
  },
} satisfies ChartConfig;

const MyStocks = () => {
  const { data, isLoading, setIsLoading, fetchData, error, setError } =
    useApi();
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [stockData, setStockData] = useState<any>([]);
  const [highestValue, setHighestValue] = useState<any>(0);
  const [retrieveSymbol, setRetrieveSymbol] = useState<any>("");

  const handleSearch = async () => {
    /* to mock Data*/
    // await fetchData("./mocks/stock-quote.json", "GET");
    setError(null);
    setStockData([]);
    await fetchData(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${searchQuery}&apikey=${process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY}`,
      "GET"
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleChartData = useCallback(() => {
    const keyCheck = Object.keys(data);
    if (keyCheck.includes("Error Message")) {
      // Handle error case
      setIsLoading(false);
      setError(data?.["Error Message"]);
      return;
    }
    else{
      //Retrieve Symbol

      //Retrieve Search Symbol
      setRetrieveSymbol(data?.["Meta Data"]?.["2. Symbol"]);


    const timeSeries = data?.["Monthly Time Series"];
    
    if (timeSeries) {
      const dateTime = Object.keys(timeSeries); //Obj in array
      console.log("Date Time", dateTime)
      const values = Object.values(timeSeries); //Obj in array
      console.log("Values", values)
      const closeValues = values.map((value: any) => value["4. close"]);
      console.log("Close Values", closeValues)
      const chartData = dateTime.map((dateTime: any, index: number) => ({
        month: dateTime,
        closePrice: closeValues[index],
      }));

      //Retrieve Highest Values
      const highestValue = Math.max(...closeValues);
      setHighestValue(highestValue);

      const sortedChartData = chartData.sort(
        (a: any, b: any) =>
          new Date(a.month).getTime() - new Date(b.month).getTime()
      );
      setStockData(sortedChartData);
      setIsLoading(false);
    }
  }
  }, [data]);

  useEffect(() => {
    if (data) {
      setTimeout(handleChartData, 5000);
      setIsLoading(true);
    }
  }, [data]);

  return (
    <div className="flex flex-col justify-start ml-70 mt-10 ">
      <p className="text-xl font-bold mt-3">Search for stocks</p>
      <div className="flex flex-row gap-6 mt-6">
        <Input
          className="w-45"
          placeholder="Search for stocks"
          onChange={handleChange}
        />
        <Button className=" w-20" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div className="mt-15 w-9/10 mx-auto">
        {isLoading && (
          <p className="text-xl font-bold text-center">Loading...</p>
        )}
        {error && (
          <p className="text-xl font-bold text-center text-red-500">
            Error: {error.toString()}
          </p>
        )}
        {stockData.length > 0 && !isLoading && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Stock Price {retrieveSymbol}</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-900px]">
                  <LineChart
                    accessibilityLayer
                    data={stockData}
                    margin={{
                      left: 10,
                      right: 10,
                    }}
                  >
                    <CartesianGrid vertical={true} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      // tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis domain={[0, highestValue + 50]} />{" "}
                    {/* Control Y-axis max here */}
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Line
                      dataKey="closePrice"
                      type="natural"
                      stroke="var(--color-closePrice)"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <Sidebar />
    </div>
  );
};
export default MyStocks;
