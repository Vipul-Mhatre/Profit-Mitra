"use client"; 

import React, { useEffect, useState } from 'react';

interface StockData {
  symbol: string;
  price: number;
  change: number;
}

const HomePage = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  
  // Mock API call 
  useEffect(() => {
    async function fetchStockData() {
      // Replace with actual API call
      const mockData: StockData[] = [
        { symbol: 'AAPL', price: 150.25, change: 1.2 },
        { symbol: 'GOOGL', price: 2750.32, change: -0.3 },
      ];
      setStockData(mockData);
    }
    
    fetchStockData();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Personalized Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {stockData.map((stock) => (
          <div key={stock.symbol} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{stock.symbol}</h2>
            <p>Price: ${stock.price.toFixed(2)}</p>
            <p className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
              {stock.change >= 0 ? '+' : '-'}{Math.abs(stock.change)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;