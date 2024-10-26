# ProfitMitra: Personalized AI-Powered Investment Advisory Tool

## Overview

ProfitMitra is a personalized AI-powered investment advisory tool designed to provide individualized financial advice and investment recommendations based on the user’s unique financial data. By leveraging powerful forecasting models, ProfitMitra offers users insights into stock trends, eco-friendly investment suggestions, and gamified tools to help achieve financial goals. The app uses advanced time series analysis techniques to forecast financial trends and deliver a customized investment experience.

## Features

### Main Solution
ProfitMitra utilizes user data to forecast investment trends using advanced forecasting techniques:
- **SARIMA Model**: For seasonal and trend analysis.
- **Prophet**: Used for robust time series forecasting.
- **Interpolation**: Fills in missing data to maintain accuracy.
- **LSTM (Long Short-Term Memory)**: Recurrent neural network architecture for complex time series prediction.

### Extra Features
ProfitMitra provides additional features to enhance the user experience, as implemented in the Next.js app:

- **User Dashboard**: A personalized view of the user’s investment data and insights.
- **Budget Stocks**: Personalized recommendations for stocks based on the user’s financial goals and budget.
- **History**: Tracks user transactions and past investments for better decision-making.
- **News**: Curated financial news related to stocks and investments.
- **Profile**: Allows users to manage their personal and financial information for accurate recommendations.
- **FAQ**: Answers to common investment-related questions to help users make informed decisions.

## Technical Details

- **Front-End**:
  - **Next.js**: Used as the primary front-end framework, allowing server-side rendering and optimized performance. The app is structured using modular routes for each feature, enabling easy navigation and scalability.
  - **TypeScript**: Used with Next.js for enhanced type safety and maintainability.
  - **Tailwind CSS**: For streamlined, responsive styling that provides a visually appealing and customizable user interface.
  - **Chart.js**: Used for ready-made UI components, such as data tables, charts, and forms, providing a clean and consistent user experience.

- **Back-End & API Integration**:
  - **Node.js & Express**: Powers any server-side logic for handling requests, authentication, and real-time data updates.
  - **API Integration**: Real-time stock data and financial news are fetched using third-party APIs:
1.Yahoo Finance
2. Google News API  
  - **Data Processing**: Stock data and user financial data are pre-processed for optimal model input, including data cleaning, normalization, and handling missing values.

- **Machine Learning Models**:
  - **SARIMA**: Applied for time series forecasting, particularly useful for seasonal investment patterns. SARIMA parameters are tuned to fit user-specific data for personalized predictions.
  - **Prophet**: This robust forecasting model from Facebook is used for daily, weekly, or monthly predictions. It handles missing data and outliers well, making it suitable for stock data with irregular trends.
  - **LSTM**: A recurrent neural network model, well-suited for sequential data analysis. Used for predicting future stock prices and trends based on historical data.
  - **Interpolation**: Fills missing values in datasets to ensure the continuity of time series data, enabling more accurate and consistent predictions.

- **Data Storage**:
  - **MongoDB**: Used for storing user profiles, investment history, and other non-volatile data. It allows for scalability and easy data retrieval.