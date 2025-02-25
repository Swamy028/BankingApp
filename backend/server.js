const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/bank', accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));