const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/final-angular-guess'));
app.get('/',function(req,res){
    console.log()
    res.sendFile(path.join(__dirname+'/dist/final-angular-guess/index.html'));
});

app.listen(process.env.PORT || 8080);
