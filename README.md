### Addons scraping
#### live demo: TBA
<img width="40" src="https://github.com/JGCZE/Filter_tailwind/assets/97174593/e9ee2bf1-aec9-4703-b6d5-5f3ffed3452a">
<img width="40" src="https://github.com/JGCZE/Filter_tailwind/assets/97174593/87b11a70-2239-4fb7-a301-00050fdf50af">
<img width="40" src="https://github.com/JGCZE/Filter_tailwind/assets/97174593/9b7e1b4e-b3c0-42ac-95c6-4186257d321a">
<img width="40" src="https://github.com/JGCZE/Filter_tailwind/assets/97174593/96d4ae8e-e233-4d3e-8800-07d7ed845461">
<img width="40" src="https://github.com/JGCZE/Filter_tailwind/assets/97174593/b4da752e-a326-4c52-bd55-3c871c99562e">

### O projektu

Webová stránka bude sloužit k zjištění, jaké doplňky používá eshop běžící na shoptetu. Aplikace je stále ve vývoji <br>

<strong> Front end: </strong> <br>
Zatím se jedná o jednoducou stránku v čistém JS a css. Výhledově bude pravděpodobně přepsána do nějakého frameworku podporující SEO.
Na stránce je input pro zadání URL eshopu, tlačítko, odkaz na stručný návod k použití a seznam nejoblíbenějších/nejčastějších doplňků.

<strong> Back end: </strong> <br>
Server napsaný v JS s využitím frameworku Express.js. Jeho hlavním účelem je stahování dat z určených webových stránek, zpracování těchto dat a ukládání do databáze MySQL.
Pomocí metod GET a POST se načítají data z databáze a inputu. URL z front endu je předána do funkce <i> getScrapedData </i>, kde se scrapují informace o použitých doplňcích a unikátní ID eshopu (data layer). Tyto hodnoty jsou předány do další funkce <i> processsAddons </i> která uloží data do databáze. Tyto data jsou poté zobrazeny na front endu.

<strong> Databaze: </strong> <br>
MySQL databáze obsahuje 3 tables, které jsou mezi sebou propojeny vazbami M:N
1. eshop : ID_eshop, url, last_update
2. addon : ID_addon, name, url, dev
3. eshop_addon : ID_eshop_addon, ID_eshop, ID_addon

<strong> Výsledek </strong>
1. uživatel zadá URL eshopu běžící na shoptetu
2. stiskne tlačítko
3. zjistí jaké doplňky jsou používány

<img width="700" alt="scraping_2 (kopie)" src="https://github.com/JGCZE/Addons_scraping/assets/97174593/fce70bed-4fe1-4de7-9c25-527a8c766c8e">

