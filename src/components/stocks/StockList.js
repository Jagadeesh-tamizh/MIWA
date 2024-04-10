import React, { useState, useEffect } from "react";
import axios from "axios";

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=demo`
        );
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stock data: ", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Top 100 Stocks</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Market</th>
          </tr>
        </thead>
        <tbody>
          {stocks.slice(0, 100).map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.description}</td>
              <td>{stock.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
