import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/ApiRouter.js';
import connectDB from './config/DbConfig.js';

const app = express();

app.use(morgan('combined')); // Logs requests from diff routes



app.set('view engine', 'ejs');
app.set('views', import.meta.dirname + "/views");

// Parse request body before router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount router after parsing middleware
app.use('/api', apiRouter);

// Main route
app.get('/', (req, res) => {
    console.log('Rendering fresh index.ejs');
    res.render('index', { name: 'Atharwa' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});
