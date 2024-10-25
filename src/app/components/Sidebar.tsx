import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link href="/stocks">Stock Price</Link>
          </li>
          <li className="mb-4">
            <Link href="/analytics">Analytics</Link>
          </li>
          <li className="mb-4">
            <Link href="/recommendations">Recommendations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;