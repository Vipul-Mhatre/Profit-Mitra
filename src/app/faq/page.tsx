"use client";

import React, { useState } from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is the purpose of this app?",
      answer: "This app provides personalized investment advice by analyzing market trends and stock data."
    },
    {
      question: "How does the app collect stock data?",
      answer: "The app collects stock data through APIs that provide real-time market information."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we prioritize user privacy and security by implementing strong data protection measures."
    },
    {
      question: "Can I track my investments with this app?",
      answer: "Yes, you can track your investments and receive personalized recommendations based on your portfolio."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support through the contact page available in the app or via email at support@example.com."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2
              className="text-xl font-semibold cursor-pointer hover:text-blue-500"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </h2>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
