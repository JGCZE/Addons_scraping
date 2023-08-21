const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

const request = require('request');
const cheerio = require('cheerio');
const { add } = require('date-fns');
const { ro } = require('date-fns/locale');

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

    // Scraping data from website
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(body);

            // Získání všech zakomentovaných informací v sekci "head"
            $('head').contents().each((index, element) => {
                if (element.type === 'comment') {
                    // get data from comment
                    const commentData = element.data.toString();
                    console.log(commentData);
                    // split to rows
                    const row = commentData.split("\n");
                    AllAddons.push(row);
                }
            });
            let howMuchAddons = AllAddons.length;
            processAddons(AllAddons, howMuchAddons);
        } else {
            console.error('Chyba při požadavku na stránku:', error);
        }
    });
});

async function processAddons(addonsArray, howMuchAddons) {
    for (let i = (howMuchAddons - 1); i < addonsArray.length; i++) {
        const row = addonsArray[i];

        // Insert into DB
        db.query('INSERT INTO addons (first_addon, second_addon, third_addon) VALUES (?, ?, ?)',
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





app.listen(port, () => console.log(`Server running on PORT ${port} 🔥🔥🔥`))