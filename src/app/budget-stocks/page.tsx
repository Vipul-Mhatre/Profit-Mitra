// pages/index.js
import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [budget, setBudget] = useState('');
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  const fetchAffordableStocks = async () => {
    if (!budget) {
      setError('Please enter a budget');
      return;
    }

    try {
      const response = await axios.get('/api/stocks', {
        params: { budget },
      });
      setStocks(response.data);
      setError(''); // Clear previous errors
    } catch (error) {
      console.error("Error fetching stocks:", error);
      setError('Failed to fetch stocks');
    }
  };

  return (
    <div>
      <h1>Stock Investment Advisor</h1>
      <h2>Find Affordable Stocks</h2>
      <input
        type="number"
        placeholder="Enter your budget"
        value={budget}
        onChange={handleInputChange}
      />
      <button onClick={fetchAffordableStocks}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {stocks.length > 0 ? (
          <ul>
            {stocks.map((stock) => (
              <li key={stock.symbol}>
                {stock.name} - ${stock.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No stocks found in this budget.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

// pages/api/stocks.js
import axios from 'axios';

const API_KEY = process.env.YAHOO_FINANCE_API_KEY; // Make sure to set your API key in .env.local
const BASE_URL = 'https://your-yahoo-finance-api-endpoint'; // Replace with the Yahoo Finance API base URL

export default async function handler(req, res) {
  const { budget } = req.query;

  try {
    // Fetch stock data using the Yahoo Finance API
    const response = await axios.get(`${BASE_URL}/StockGetFinancialData`, {
      params: {
        apiKey: API_KEY,
        // Add any necessary parameters to filter stocks
      },
    });

    // Filter stocks that are affordable based on the user's budget
    const affordableStocks = response.data.filter((stock) => {
      return stock.price <= budget; // Adjust according to the actual data structure
    });

    res.status(200).json(affordableStocks);
  } catch (error) {
    console.error("Error fetching data from Yahoo Finance:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
