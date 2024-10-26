"use client";

import React, { useEffect, useState } from 'react';

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchNews = async () => {
    if (!query) {
      setErrorMessage('Please enter a search query');
      setNewsArticles([]);
      return;
    }

    const url = `https://serpapi.com/search?engine=google_news&q=${encodeURIComponent(query)}`; // Build the URL with the query

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-api-key': 'b6752fa557377bdbda8bef7d71693db13f9aa04fbcab1d20598bb60f6f561b17', // Replace with your actual SerpAPI key
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('News Response:', data); // Log the response for debugging

        if (data.articles && data.articles.length > 0) {
          setNewsArticles(data.articles); // Update the state with news articles
          setErrorMessage('');
        } else {
          setNewsArticles([]);
          setErrorMessage('No news articles found.');
        }
      } else {
        const errorText = await response.text();
        setErrorMessage(`Failed to fetch news: ${errorText}`);
        setNewsArticles([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setErrorMessage(`Error fetching news: ${error}`);
      setNewsArticles([]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Search Google News</h1>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={fetchNews}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Search
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <ul className="mt-4">
        {newsArticles.length > 0 ? (
          newsArticles.map((article, index) => (
            <li key={index} className="p-2 bg-white shadow rounded mb-2">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-gray-700">{article.snippet}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No news articles available.</p>
        )}
      </ul>
    </div>
  );
};

export default NewsPage;
