// pages/api/stocks.js

import axios from 'axios';

export default async function handler(req, res) {
    const { budget } = req.query; // Get budget from query parameters
    const apiKey = 'a90b444b85mshf403ba911915a15p17c266jsn919cf8b46587'; // Your RapidAPI key

    // Example stock symbols (you can modify this based on your needs)
    const symbols = 'AAPL,MSFT,GOOGL,AMZN,TSLA';

    try {
        const response = await axios.get('https://yahoo-finance166.p.rapidapi.com/api/stock/get-price', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-rapidapi-ua': 'RapidAPI-Playground',
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com',
            },
            params: {
                symbols, // Pass the stock symbols as a parameter
            }
        });

        // Filter stocks based on user's budget
        const affordableStocks = response.data.data.filter(stock => stock.price <= budget);

        res.status(200).json(affordableStocks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch stock data' });
    }
}
