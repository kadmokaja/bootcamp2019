import { Router } from 'express';

const routes = new Router();

let numberOfRequests = 0;
const projects = [];

routes.post('/projects', ProviderController.store);
routes.get('/projects', ProviderController.index);
routes.put('/projects/:id', ProviderController.update);
routes.delete('/projects/:id', ProviderController.delete);
routes.post('/projects/:id/tasks', TaskController.store);
