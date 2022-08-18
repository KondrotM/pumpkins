# pumpkins
A multi-iteration showcase of an HTML website implementing pumpkin-tracking technology. 
## To run javascript locally
Some parts of the websites implement javascript packages, which cannot be accessed directly from just opening the .html file.

Run the file on a local server instead:
`npm install http-server -g`
`cd ./pumpkins`
`http-server`

The navigate to localhost:8080 in a browser.

## Scenario
YourPumpkinDatabase (YPD) is a tech startup from the early days of the internet. 
Pumpkin farmers take measurements of their pumpkins (height, weight, circumference) and send them to the database.
The site has a small customer base and big dreams.

### Early days
Circa 1997. The company has a stylish website implementing table layouts. Though the site has no CSS, the developers used (now outdated) table properties to style the site. Find this in `html_only`

### Later on
Circa 2010 (?) Feeling that their website is a bit dated, YPD hired a front-end designer to implement cutting-edge flexbox technology. Find this in `html_css`

### REST
Circa ??? (ok, this is not a historic reenactment), some developer at the company is experimenting with integrating API data using javascript. Find this in `kanye.rest`

### Getting modern
Circa 2014, the developers decided to use an API for programmatiaclly inserting data into the website, rather than manually updating it on their end. Website also includes media queries as mobile phones have took over. Find this in `with_js`

### React
At some point after this, the developers realise they want a powerful framework for all their upcoming ideas. They experiment with react in the [`tsi-react`](https://github.com/KondrotM/tsi-react) repository. 

### The new web is here
YPD decided to start developing a pumpkin-measuring enteprise suite, with react-based microservices powering their data. [`pumpkins-react`](https://github.com/KondrotM/pumpkins-react) is their new-fangled service for harvesting data. 


## footnote
This is satire and there is no real product.

