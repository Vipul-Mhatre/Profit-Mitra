"use client";

import React, { useEffect, useState } from 'react';

const StocksPage = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [budget, setBudget] = useState('');
  const [stocks, setStocks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchAnalyticsData() {
      // Mock API Call
      const mockAnalytics = [
        { stock: 'AAPL', performance: 'Strong Buy', target: 180 },
        { stock: 'GOOGL', performance: 'Hold', target: 2900 },
      ];
      setAnalyticsData(mockAnalytics);
    }
    
    fetchAnalyticsData();
  }, []);

  const fetchAffordableStocks = async () => {
    if (!budget) {
      setErrorMessage('Please enter a budget');
      setStocks([]);
      return;
    }

    const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=GOOGL'; // Use a default symbol for recommendations

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-rapidapi-key': 'a90b444b85mshf403ba911915a15p17c266jsn919cf8b46587', // Replace with your actual API key
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response body:', data); // Log the full response body for debugging

        const quotes = data.finance.result.length > 0 ? data.finance.result[0].quotes : [];

        if (quotes.length > 0) {
          const budgetValue = parseFloat(budget);
          const affordableStocks = quotes.filter(stock => {
            const price = stock.regularMarketPrice !== undefined ? stock.regularMarketPrice : 0.0;
            return price <= budgetValue;
          });

          setStocks(affordableStocks);
          setErrorMessage('');
        } else {
          setStocks([]);
          setErrorMessage('No stock recommendations found.');
        }
      } else {
        const errorText = await response.text();
        setErrorMessage(`Failed to fetch stocks: ${errorText}`);
        setStocks([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(`Error: ${error}`);
      setStocks([]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Stock Analytics</h1>
      <div className="grid grid-cols-2 gap-4">
        {analyticsData.map((data, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold text-gray-800">{data.stock}</h2>
            <p className="text-gray-700">Recommendation: {data.performance}</p>
            <p className="text-gray-700">Target Price: <span className="font-bold text-green-600">${data.target}</span></p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Affordable Stocks</h2>
        <input
          type="number"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={fetchAffordableStocks}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Search
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <ul className="mt-4">
          {stocks.length > 0 ? (
            stocks.map((stock, index) => (
              <li key={index} className="p-2 bg-white shadow rounded mb-2">
                <strong className="text-gray-800">{stock.shortName ? stock.shortName : 'N/A'}</strong> - 
                <span className="font-bold text-green-600">
                  {stock.regularMarketPrice !== null ? ` $${stock.regularMarketPrice}` : ' Price not available'}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No stocks found within the specified budget.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StocksPage;
