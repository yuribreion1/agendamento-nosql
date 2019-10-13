const express = require('express');
const routes = express.Router();
const SessionControllers = require('./controllers/SessionController');
const RequestRoomControllers = require('./controllers/RequestRoomController');
const RequestMaterialControllers = require('./controllers/RequestMaterialController');

// User session routes
routes.post('/sessions', SessionControllers.store);  
routes.put('/sessions/:id', SessionControllers.update);
routes.get('/sessions', SessionControllers.index);
routes.delete('/sessions/:id', SessionControllers.destroy);
routes.get('/sessions/:id', SessionControllers.show);

// Request rooms routes
routes.post('/rooms', RequestRoomControllers.store);
routes.put('/rooms/:id', RequestRoomControllers.update);
routes.get('/rooms', RequestRoomControllers.index);
routes.delete('/rooms/:id', RequestRoomControllers.destroy);
routes.get('/rooms/:id', RequestRoomControllers.show);

// Request class resources routes
routes.post('/resources', RequestMaterialControllers.store);
routes.put('/resources/:id', RequestMaterialControllers.update);
routes.get('/resources', RequestMaterialControllers.index);
routes.delete('/resources/:id', RequestMaterialControllers.destroy);
routes.get('/resources/:id', RequestMaterialControllers.show);

module.exports = routes;