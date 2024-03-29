import React, { useState, useEffect, useContext } from "react";
import Header from "../components/dash/Header";
import Details from "../components/dash/Details";
import Overview from "../components/dash/Overview";
import Chart from "../components/dash/Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote, fetchHistoricalData } from "../utils/api/stock-api";
import Graph from "../components/dash/Graph";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [data, setData] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    const updateStockData = async () => {
      try {
        const result = await fetchHistoricalData(stockSymbol);
        const cur = [
        ]
        Object.keys(result.data["Time Series (5min)"]).map(item => {
                  cur.push({
                    name : item.toString(),
                    val : result.data["Time Series (5min)"][item.toString()]["4. close"]
                  })
        })
        setData(cur);
      } catch (error) {
        setData({});
        console.log(error);
      }
    };

    updateStockData();
    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        {/* <Chart /> */}
        <Graph/>
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3" style={{display:"inline-table"}}>
        <Details details={stockDetails} />
      </div>
    </div>
  )
}

export default Dashboard
