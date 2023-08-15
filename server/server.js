const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

const request = require('request');
const cheerio = require('cheerio');

app.use(cors());    
app.use(express.json());




//create connection to database


// get user value from input, from frontend
app.post("/analyze", (req, res) => {
    console.log(req.body)
    const textFromClient = req.body;
    console.log(textFromClient);
    res.send("Hello from server");
})


//scraping data from website
// const url = 'https://www.gymio.com/'

// request(url, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       const $ = cheerio.load(body);
  
//       // Získání všech zakomentovaných informací v sekci "head"
//       $('head').contents().each((index, element) => {
//         if (element.type === 'comment') {
//           console.log(element.data.trim());
//         }
//       });
//     } else {
//       console.error('Chyba při požadavku na stránku:', error);
//     }
//   });


app.listen(port, () => console.log(`Server running on PORT ${port} 🔥🔥🔥`))