const express = require('express');
const routes = express.Router();
const SessionControllers = require('./controllers/SessionController');
const RequestRoomControllers = require('./controllers/RequestRoomController');
const RequestMaterialControllers = require('./controllers/RequestMaterialController');

// Index
routes.get('/', SessionControllers.init);
routes.get('/registration', SessionControllers.registration);
routes.get('/menu', SessionControllers.menu)
routes.post('/login', SessionControllers.login);

// User session routes
routes.post('/sessions', SessionControllers.store);  
routes.put('/sessions/:id', SessionControllers.update);
routes.get('/sessions', SessionControllers.index);
routes.delete('/sessions/:id', SessionControllers.destroy);
routes.get('/sessions/:id', SessionControllers.show);

// Request rooms routes
routes.get('/request/room', RequestRoomControllers.request);
routes.post('/request/room', RequestRoomControllers.store);
routes.get('/list/room', RequestRoomControllers.index);
routes.put('/rooms/:id', RequestRoomControllers.update);
routes.delete('/remove/room/:id', RequestRoomControllers.destroy);
routes.get('/remove/room/:id', RequestRoomControllers.destroy);
routes.get('/rooms/:id', RequestRoomControllers.show);

// Request class resources routes
routes.get('/request/resource', RequestMaterialControllers.request);
routes.post('/request/resource', RequestMaterialControllers.store);
routes.get('/list/resource', RequestMaterialControllers.index);
routes.post('/resources', RequestMaterialControllers.store);
routes.put('/resources/:id', RequestMaterialControllers.update);
routes.get('/remove/resource/:id', RequestMaterialControllers.destroy);
routes.delete('/resources/:id', RequestMaterialControllers.destroy);
routes.get('/resources/:id', RequestMaterialControllers.show);

module.exports = routes;