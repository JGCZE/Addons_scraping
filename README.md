### Addons scraping
#### live demo: TBA
<img width="40px" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/2600330e-a7c4-42b2-a644-f64f0920fa4f">
<img width="40px" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/c2d23cbc-17a3-4893-8a2d-6fe789af1b3d">
<img width="40px" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/3189e30e-2426-404e-b4d9-bfd133f00f66">
<img width="40px" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/043dae9c-d48a-4371-937c-b6fadb04132f">
<img width="40px" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/bc185e24-1f4a-4e13-812d-d8c25191a8ab">

### O projektu
About the Project

The website serves the purpose of identifying which plugins a Shoptet e-shop uses. The application is still under development. At present, we are awaiting a list with the names of the add-ons. We will proceed afterward

<strong> Frontend: </strong> <br>
Currently, it's a simple webpage written in vanilla JS and CSS. In the future, it will likely be rewritten using a framework that supports SEO.

The page features an input field for entering the e-shop's URL, a button for initiating the process, a link to a brief usage guide, and a list of favorite/most common plugins.

<strong> Backend: </strong> <br>
The server is written in JS, utilizing the Express.js framework. Its main function is to retrieve data from specified web pages, process this data, and store it in a MySQL database.
Data is loaded from the database and the input using GET and POST methods. The URL from the frontend is passed on to the getScrapedData function, where information about used plugins and the unique e-shop ID (data layer) is scraped. These values are then passed on to another function, processAddons, which saves the data in the database. This data is subsequently displayed on the frontend.


<strong> Database: </strong> <br>
The MySQL database consists of three tables interconnected with M:N relationships.

eshop: ID_eshop, url, last_update
addon: ID_addon, name, url, dev
eshop_addon: ID_eshop_addon, ID_eshop, ID_addon
Outcome:

<strong>Proces: </strong>
1. The user inputs the URL of a Shoptet e-shop.
2. They press the button.
3. They discover which plugins are in use.

<img width="700" alt="scraping_2 (kopie)" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/fce70bed-4fe1-4de7-9c25-527a8c766c8e">
 <br> scraped data <br>
<img width="550" alt="Snímek obrazovky 2023-09-30 v 16 36 28" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/f9196f2f-264d-4cd8-bc31-b7e402edf50c">

