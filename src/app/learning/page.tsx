
'use client'
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const Learning = () => {
   const budget = useSelector((state: RootState) => state.initalState.value);
  return (
    <div className="flex flex-col items-start justify-start ml-70 mt-10 ">
      <h1 className="text-2xl bold ">About Stocks</h1>
      {/* <h2>{budget}</h2> */}
      <p className="text-gray-500 mt-3">
        Stocks are a type of investment that represents ownership in a company
        or organization. When you buy a stock, you become a shareholder in the
        company and receive a portion of its profits and assets. Stocks are a
        popular way to invest in the stock market, and they can be a good way to
        grow your wealth over time.
      </p>
      <h5 className="text-lg bold mt-3">ETFs</h5>
      <p className="text-gray-500 mt-3">
        ETFs (Exchange-Traded Funds) are a type of investment that allows you to
        buy a diversified portfolio of stocks or bonds. ETFs are a popular way
        to invest in the stock market, and they can be a good way to grow your
        wealth over time.
      </p>
      <p className="mt-4 text-md">Examples</p>
      <ul className="list-disc mt-3 text-gray-500">
        <li>
          The Vanguard S&P 500 ETF (VOO) - is a passively managed
          exchange-traded fund that aims to replicate the performance of the S&P
          500 Index. This index comprises 500 of the largest publicly traded
          companies in the U.S., offering investors broad exposure to the U.S.
          large-cap equity market. VOO is known for its low expense ratio and is
          a popular choice among long-term investors seeking diversified
          exposure to the U.S. stock market.
        </li>
      </ul>
      <Sidebar />
    </div>
  );
};

export default Learning;
