import express from 'express';
import morgan from 'morgan';



const app = express();


//Middlewares
const middlewares = [mid1, mid2, mid3];

const CommonMiddleware = (req, res, next) => {
    console.log('CommonMiddleware');
    next();
}

// whatever that we pass in app.use will be called before every route

app.use(CommonMiddleware);  //compulsory middleware for all the routes
app.use(morgan('combined')); //gives logs for eachn request


app.use(express.json()); //converts req.body to json
app.use(express.urlencoded()); // if the data send is url enccoded

// The req.body can have multiple type of data (text ,html, json, etc)
// so we specify here which type of data will be received
// app.use(express.text()); this will receive text type of data

app.set('view engine', 'ejs'); // this will render the ejs files
app.set('views', import.meta.dirname + "/views");
app.set('view cache', false);



function mid1(req, res, next) {
    console.log('mid1');
    next();
}

function mid2(req, res, next) {
    console.log('mid2');
    next();
}

function mid3(req, res, next) {
    console.log('mid3');
    next();
}

// client --> /ping --> mid1 --> mid2 --> mid3 --> server
// mid1 mid2 mid3 are called middlewares
// They take 3 parameters req, res, next
// req is the request object(client)
// res is the response object(server)
// next is a function that calls the next middleware in the chain


// Main code
app.get('/', (req, res) => {
    console.log('Rendering fresh index.ejs');
    res.render('index', { name: 'Atharwa' });
});

app.get('/ping', middlewares, (req, res) => {
    return res.json({ message: 'Pong!', });
});

app.get('/tweets/:tweet_Id/:user_Id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    return res.json({ message: 'Tweets!', });
});

app.get('/Reg*Ex', (req, res) => {  // The * is a wildcard (Regex) that means anything can come in between Reg and Ex
    console.log(req.body);
    console.log(req.params);
    return res.json({ message: 'RegEx!', });
});


app.post('/tweet', (req, res) => {
    console.log(req.query);
    return res.json({ message: 'Tweet posted!' });
}); // query params have been sent using postman


app.use((req, res) => {
    res.status(404).json({ message: 'Not Found!' });
}); // <-- must end here
// if any other url is typed other than the defined routes, it will return 404

//  In express v4 , the syntax was like this

// app.use("*",(req, res) => {
//     res.status(404).json({ message: 'Not Found!' });
// });


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



