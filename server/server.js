//requires
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

//globals
const port = 5000;

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

//spin up servre
app.listen(port, () => {
    console.log('server up on:', port);
console.log('hahaha');
})//end server up

//get route
const people = ['Heather','Heather','Halima'];

app.get('/tester',(req,res)=> {
    console.log('in /tester GET');
    res.send(people);
}) //end GET

app.post('/tester', (req,res)=> {
    console.log('got to POST /tester',req.body);//req.body to show the data:Thy from AJAX in terminal
    people.push(req.body.name);
    console.log(people);//show up to DOM Thy and combine show on termial as well
    res.send('woof');
});// end post