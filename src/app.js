import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import reviewRoutes from './routes/review.routes.js';
import cors from 'cors';

const app = express();

//middleware
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api", reviewRoutes);

export default app;
