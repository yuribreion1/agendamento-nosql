const express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const appInsights = require("applicationinsights");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(routes);
appInsights.setup("bfc056c5-787f-435f-b4cc-7d2973513fc8")
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setSendLiveMetrics(true)
    .start();

mongoose.connect('mongodb://yuribreion:yuribreion@cluster0-shard-00-00-hxso2.azure.mongodb.net:27017,cluster0-shard-00-01-hxso2.azure.mongodb.net:27017,cluster0-shard-00-02-hxso2.azure.mongodb.net:27017/agendamento?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });


app.listen(port, () => {
    console.log('Servidor ativo na porta: ' + port);
})