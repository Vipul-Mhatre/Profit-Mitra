import yfinance as yf
import pandas as pd
import random
from datetime import datetime


def fetch_data_in_price_range(ticker: str, start_date: str, end_date: str, min_price: float, max_price: float):
    try:

        stock_data = yf.download(ticker, start=start_date, end=end_date)

        if stock_data.empty:
            print(f"No data found for {ticker}. Check if the ticker is correct and if the market was open.")
            return pd.DataFrame()  
        
        filtered_data = stock_data[(stock_data['Close'] >= min_price) & (stock_data['Close'] <= max_price)]
        
        if filtered_data.empty:
            print(f"No data found for {ticker} in the given price range.")
        else:
            print(f"Filtered Data for {ticker} in Price Range:")
            print(filtered_data)

            latest_date = filtered_data.index[-1].date()
            latest_price = filtered_data['Close'].iloc[-1]  
            print(f"Latest date for {ticker}: {latest_date} with a closing price of ${latest_price:.2f}")
    
    except Exception as e:
        print(f"An error occurred while fetching data for {ticker}: {e}")
    
    return filtered_data

start_date = input("Enter the start date (YYYY-MM-DD): ")
end_date = input("Enter the end date (YYYY-MM-DD): ")

# Validate date format
try:
    start_date_obj = datetime.strptime(start_date, "%Y-%m-%d")
    end_date_obj = datetime.strptime(end_date, "%Y-%m-%d")
    if end_date_obj < start_date_obj:
        raise ValueError("End date must be after the start date.")
except ValueError as ve:
    print(f"Invalid date format: {ve}")
    exit(1)

print(f"\nUsing start date: {start_date} and end date: {end_date}")

min_price = float(input("Enter the minimum price: "))
max_price = float(input("Enter the maximum price: "))

ticker = input("Enter the stock ticker (e.g., TCS.NS): ")
data = fetch_data_in_price_range(ticker, start_date, end_date, min_price, max_price)