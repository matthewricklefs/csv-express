# CSV-Express
> An express server that uses a custom data persistence layer, CSVs! 

## Setup Method
https://medium.com/@agavitalis/setting-up-a-nodejs-express-application-with-babel-642fe0dd45a5

- added a libCSV folder to house the CSV library built in previous assignments
- added an input.csv file in the root of the application that the CSV library reads from


# minor issues
Observed on ubuntu machine
```bash
npm start
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node app.js`
body-parser deprecated undefined extended: provide extended option app.js:9:29
app is listening to port 5000
```

Not sure why the body-parser warning is elicited as it has been removed from the package.json.