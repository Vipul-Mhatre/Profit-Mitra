import React, { useEffect, useState } from 'react';

const StocksPage = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    async function fetchAnalyticsData() {
      // API Call  M D
      const mockAnalytics = [
        { stock: 'AAPL', performance: 'Strong Buy', target: 180 },
        { stock: 'GOOGL', performance: 'Hold', target: 2900 },
      ];
      setAnalyticsData(mockAnalytics);
    }
    
    fetchAnalyticsData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Stock Analytics</h1>
      <div className="grid grid-cols-2 gap-4">
        {analyticsData.map((data, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{data.stock}</h2>
            <p>Recommendation: {data.performance}</p>
            <p>Target Price: ${data.target}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StocksPage;