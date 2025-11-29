
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/ApiRouter.js';
const app = express();

app.use(morgan('combined')); //gives logs for eachn request
console.log("RUNNING FILE:", import.meta.url);



app.set('view engine', 'ejs'); // this will render the ejs files
app.set('views', import.meta.dirname + "/views");

app.use('/api', apiRouter);



// Main code
app.get('/', (req, res) => {
    console.log('Rendering fresh index.ejs');
    res.render('index', { name: 'Atharwa' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



