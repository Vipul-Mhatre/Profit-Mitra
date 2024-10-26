"use client"; 

import React from 'react';

const TestData = [
    { id: 1, shareName: 'Apple Inc.', price: 145, status: 'profit', date: '2024-01-01', profitLoss: 20, sharesBought: 10 },
    { id: 2, shareName: 'Google LLC', price: 2800, status: 'loss', date: '2024-01-02', profitLoss: -150, sharesBought: 5 },
    { id: 3, shareName: 'Amazon.com Inc.', price: 3300, status: 'loss', date: '2024-01-04', profitLoss: -100, sharesBought: 2 },
    { id: 4, shareName: 'Microsoft Corp.', price: 299, status: 'profit', date: '2024-01-05', profitLoss: 30, sharesBought: 8 },
    { id: 5, shareName: 'Meta Platforms', price: 350, status: 'loss', date: '2024-01-06', profitLoss: -20, sharesBought: 6 },
    { id: 6, shareName: 'NVIDIA Corp.', price: 220, status: 'profit', date: '2024-01-07', profitLoss: 15, sharesBought: 4 },
    { id: 7, shareName: 'Berkshire Hathaway', price: 410, status: 'loss', date: '2024-01-08', profitLoss: -60, sharesBought: 1 },
    { id: 8, shareName: 'Tesla Inc.', price: 650, status: 'profit', date: '2024-01-09', profitLoss: 10, sharesBought: 5 },
    { id: 9, shareName: 'Coca-Cola Co.', price: 55, status: 'loss', date: '2024-01-10', profitLoss: -5, sharesBought: 15 },
    { id: 10, shareName: 'NVIDIA Corp.', price: 240, status: 'loss', date: '2024-01-11', profitLoss: -30, sharesBought: 7 },
    { id: 11, shareName: 'Pfizer', price: 43, status: 'loss', date: '2024-01-12', profitLoss: -10, sharesBought: 7 },
    { id: 12, shareName: 'Intel Corp.', price: 58, status: 'profit', date: '2024-01-13', profitLoss: 5, sharesBought: 20 },
    { id: 13, shareName: 'Netflix', price: 550, status: 'loss', date: '2024-01-14', profitLoss: -30, sharesBought: 3 },
    { id: 14, shareName: 'PayPal Holdings', price: 280, status: 'profit', date: '2024-01-15', profitLoss: 45, sharesBought: 2 },
    { id: 15, shareName: 'PayPal Holdings', price: 250, status: 'profit', date: '2024-01-15', profitLoss: 15, sharesBought: 5 },
  ];
  

const HistoryPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Investment History</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Share Name</th>
            <th className="border p-2">Price (in Rupees)</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Profit/Loss (Per Share)</th>
            <th className="border p-2">Shares Bought</th>
          </tr>
        </thead>
        <tbody>
          {TestData.map((entry) => (
            <tr key={entry.id} className={entry.status === 'profit' ? 'bg-green-100' : 'bg-red-100'}>
              <td className="border p-2 text-center">{entry.id}</td>
              <td className="border p-2">{entry.shareName}</td>
              <td className="border p-2 text-right">{entry.price}</td>
              <td className="border p-2 text-center">
                {entry.status === 'profit' ? '↑' : '↓'}
              </td>
              <td className="border p-2 text-center">{entry.date}</td>
              <td className="border p-2 text-right">{entry.profitLoss}</td>
              <td className="border p-2 text-right">{entry.sharesBought}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;