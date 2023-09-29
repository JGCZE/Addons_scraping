const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

const request = require('request');
const cheerio = require('cheerio');
const { da } = require('date-fns/locale');


app.use(cors());    
app.use(express.json());

//create connection to database
const db = mysql.createConnection({
    connectionLimit: 10,
    user: 'root',
    host: '127.0.0.1',
    password: '',
    database: 'webanalysis',
    port: '3307'
})

//load data from database
app.get("/", (req, res) => {
    db.query('SELECT * FROM addons', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// get user value from input, from frontend
app.post("/analyze", (req, res) => {
    // format to correct url
    const url = `https://${req.body.valueFromUser}`;
    res.send("Hello from server");

    // array for all addons
    const AllAddons = [];
    // call function for scraping data
    getScrapedData(url, AllAddons)
   
});


// Scraping data from url
function getScrapedData(url, AllAddons) {
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(body);

            //Získání všech zakomentovaných informací v sekci "head"
            $('head').contents().each((index, element) => {
                if (element.type === 'comment') {
                    // get data from comment
                    const commentData = element.data.toString();
                    // split to rows
                    const row = commentData.split("\n");
                    AllAddons.push(row);
                }
            });

            // scraping dataLayer from head
            const dataLayer = $('head script').html();
            const projectIdPattern = /"projectId":\s*(\d+),/;
            const match = dataLayer.match(projectIdPattern);
            
            if (match && match[1]) {
                const projectId = parseInt(match[1]);
                console.log("projectId:", projectId);
            } else {
                console.log("projectId not found");
            }
  
            let howMuchAddons = AllAddons.length;
            // call function for inserting data to database
            //processAddons(AllAddons, howMuchAddons);
        } else {
            console.error('Chyba při požadavku na stránku:', error);
        }
    });
}


// function for inserting data to database
function processAddons(addonsArray, howMuchAddons) {
    for (let i = (howMuchAddons -1); i < addonsArray.length; i++) {
        const row = addonsArray[i];

        // Insert into DB
        db.query('INSERT INTO addon (first_addon, second_addon, third_addon) VALUES (?, ?, ?)',
         [addonsArray[3], addonsArray[4], addonsArray[5]],
          (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    }
}


// get data from database
app.get("/getAddons", (req, res) => {
    db.query('SELECT * FROM addons', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, () => console.log(`Server running on PORT ${port} 🔥🔥🔥`))