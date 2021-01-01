const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

//app.get('/',(req, res)=>{
// res.send('Hello Soccer')
//})



//allow the bodypurser to intercept from the http 
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//listening to get the request
app.get('/', (req, res) => {
    res.send('Welcome to data and representation and querying !')
  })

// listen to the post request and pull team, venue and player out from the body
app.get('/api/matches', (req, res) => {

    const mymatches = [
        {
            "Player": "Hakim",
            "Venue": "London",
            "imdbID": "tt4154756",
            "Type": "match",
            "Team": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
        },
        {
            "Player": "Thiago",
            "Venue": "Liverpool",
            "imdbID": "tt3498820",
            "Type": "match",
            "Team": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
        },
        {
            "Player": "Ben",
            "Venue": "Sunderland",
            "imdbID": "tt0816711",
            "Type": "match",
            "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
        },
        {
            "Player": "Reeces",
            "Venue": "Chalsea",
            "imdbID": "tt0407304",
            "Type": "match",
            "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
        }
    ];
    res.status(200).json({
        message: "all is good",
        matches: mymatches
    });
})

app.post('/api/matches', (rep, res) => {
    console.log('Matches Won!');
    console.log(req.body.Player);
    console.log(req.body.Venue);
    console.log(req.body.Team);

    app.listen('/api/matches', (req, res) => {

    });


    //Passing the objects

})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})