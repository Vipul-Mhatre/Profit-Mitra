"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { link } from 'fs';

const Sidebar = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "rRkAghsWB9AfyddZ7WAwF",
      domain: "www.chatbase.co"
    };

    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "rRkAghsWB9AfyddZ7WAwF");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen w-64 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold ">Profit Mitra</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul>
        <li className="mb-4">
            <Link href="/">Dashboard</Link>
          </li>

          <li className="mb-4">
            <Link href="/budget-stocks">Budget</Link>
          </li>
          <li className="mb-4">
            <Link href="/news">News</Link>
          </li>

          <li className="mb-4">
            <Link href="/profile">Profile</Link>
          </li>
   
                    <li className="mb-4">
            <Link href="/history">History</Link>
          </li>
          <li className="mb-4">
            <Link href="/faq">FAQ's</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;