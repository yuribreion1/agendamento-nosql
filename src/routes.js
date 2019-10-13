const express = require('express');
const routes = express.Router();
const SessionControllers = require('./controllers/SessionController');
const RequestRoomControllers = require('./controllers/RequestRoomController');
const RequestMaterialControllers = require('./controllers/RequestMaterialController');

routes.post('/sessions', SessionControllers.store);  
routes.put('/sessions/:id', SessionControllers.update);
routes.get('/sessions', SessionControllers.index);
routes.delete('/sessions/:id', SessionControllers.destroy);
routes.get('/sessions/:id', SessionControllers.show);
routes.post('/rooms', RequestRoomControllers.store);
routes.post('/resources', RequestMaterialControllers.store);

module.exports = routes;