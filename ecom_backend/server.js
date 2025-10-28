import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ✅ MongoDB connection
const mongoURI = 'mongodb+srv://devilshade1902:dhruvtiger1708@trendmart.ka9p5rk.mongodb.net/TrendMart';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// ✅ Default route
app.get('/', (req, res) => res.send('Hello World from TrendMart! 🚀'));

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
