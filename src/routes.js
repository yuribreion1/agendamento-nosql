const express = require('express');
const routes = express.Router();
const SessionControllers = require('./controllers/SessionController');
const RequestRoomControllers = require('./controllers/RequestRoomController');
const RequestMaterialControllers = require('./controllers/RequestMaterialController');

routes.post('/sessions', SessionControllers.store);  
routes.post('/rooms', RequestRoomControllers.store);
routes.post('/resources', RequestMaterialControllers.store);

module.exports = routes;