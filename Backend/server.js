const mongoose = require('mongoose');
const express = require('express');
const Investment = require('./Database/investmentModel'); 

const app = express();

mongoose.connect('mongodb://localhost:27017/investments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const TestData = [
    { shareName: 'Apple Inc.', price: 145, status: 'profit', date: '2024-01-01', profitLoss: 20, sharesBought: 10 },
    { shareName: 'Google LLC', price: 2800, status: 'loss', date: '2024-01-02', profitLoss: -150, sharesBought: 5 },
    { shareName: 'Amazon.com Inc.', price: 3300, status: 'loss', date: '2024-01-04', profitLoss: -100, sharesBought: 2 },
    { shareName: 'Microsoft Corp.', price: 299, status: 'profit', date: '2024-01-05', profitLoss: 30, sharesBought: 8 },
    { shareName: 'Meta Platforms', price: 350, status: 'loss', date: '2024-01-06', profitLoss: -20, sharesBought: 6 },
    { shareName: 'NVIDIA Corp.', price: 220, status: 'profit', date: '2024-01-07', profitLoss: 15, sharesBought: 4 },
    { shareName: 'Berkshire Hathaway', price: 410, status: 'loss', date: '2024-01-08', profitLoss: -60, sharesBought: 1 },
    { shareName: 'Tesla Inc.', price: 650, status: 'profit', date: '2024-01-09', profitLoss: 10, sharesBought: 5 },
    { shareName: 'Coca-Cola Co.', price: 55, status: 'loss', date: '2024-01-10', profitLoss: -5, sharesBought: 15 },
    { shareName: 'NVIDIA Corp.', price: 240, status: 'loss', date: '2024-01-11', profitLoss: -30, sharesBought: 7 },
    { shareName: 'Pfizer', price: 43, status: 'loss', date: '2024-01-12', profitLoss: -10, sharesBought: 7 },
    { shareName: 'Intel Corp.', price: 58, status: 'profit', date: '2024-01-13', profitLoss: 5, sharesBought: 20 },
    { shareName: 'Netflix', price: 550, status: 'loss', date: '2024-01-14', profitLoss: -30, sharesBought: 3 },
    { shareName: 'PayPal Holdings', price: 280, status: 'profit', date: '2024-01-15', profitLoss: 45, sharesBought: 2 },
    { shareName: 'PayPal Holdings', price: 250, status: 'profit', date: '2024-01-15', profitLoss: 15, sharesBought: 5 },
  ];
  
  app.get('/seed', async (req, res) => {
    try {
      await Investment.insertMany(TestData);
      res.status(200).send('Data seeded successfully');
    } catch (error) {
      console.error("Data seeding failed:", error);
      res.status(500).send("Error seeding data");
    }
  });