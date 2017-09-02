const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

app.set('src', __dirname + '/src');
app.set('Components', __dirname + '/src/Components');

//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});