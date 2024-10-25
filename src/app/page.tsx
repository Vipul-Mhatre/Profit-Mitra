"use client";

import React, { useEffect, useState } from 'react';

// Interface for StockData
interface StockData {
  symbol: string;
  price: number;
  change: number;
}

// Main Component
const HomePage = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  
  // Mock API call 
  useEffect(() => {
    async function fetchStockData() {
      // Replace with actual API call
      const mockData: StockData[] = [
        { symbol: 'AAPL', price: 150.25, change: 1.2 },
        { symbol: 'GOOGL', price: 2750.32, change: -0.3 },
        { symbol: 'AMZN', price: 3450.00, change: 2.5 },
        { symbol: 'TSLA', price: 720.10, change: -1.0 },
      ];
      setStockData(mockData);
    }
    
    fetchStockData();
  }, []);
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Personalized Investment Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stockData.map((stock) => (
          <div key={stock.symbol} className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{stock.symbol}</h2>
            <p className="text-lg">Price: <span className="font-bold">${stock.price.toFixed(2)}</span></p>
            <p className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
              {stock.change >= 0 ? '+' : '-'}{Math.abs(stock.change).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      {/* Optional - Additional Sections */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Market Trends</h2>
        <p>Your customized insights will be displayed here.</p>
        {/* You can add line charts, pie charts, etc. using libraries like Chart.js or Recharts */}
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Top Recommendations</h2>
        <p>Your personalized investment recommendations will be listed here.</p>
        {/* Placeholder for recommendations */}
      </div>
    </div>
  );
};

export default HomePage;