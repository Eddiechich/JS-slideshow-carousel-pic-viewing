const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));
const viewsPath = path.join(__dirname,'./views'); 
app.set('views', viewsPath);
const image = require('./modules/images');
app.get('/test', (req, res) => { 
    res.send();
});
app.get('', (req, res) => {
    res.render("index",{imagesArray: image});
});
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});