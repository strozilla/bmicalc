const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/', function(req, res){

    console.log(req.body);
    res.send()
})

app.listen(3000, () => {
    console.log('Hosted on local port 3000');
});



app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});


app.post('/bmiCalculator', function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight * 705 / height / height;

    res.send("Your BMI is " + bmi);

})