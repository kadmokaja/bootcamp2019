const express = require('express');

const server = express();

server.use(express.json());

let numberOfRequests = 0;
const projects = [];

/* Middlewares to check if project exists and to count number of requests*/
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

function getNumberOfLogRequests(req, res, next) {
  numberOfRequests++;
  console.log(`Number of requests is:, ${numberOfRequests}`);
  next();
}

server.use(getNumberOfLogRequests);

/* Index all projects */
server.get('/projects', (req, res) => {
  return res.json(projects);
});

/* Insert a new project */
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: [],
  };

  projects.push(project);

  return res.json(project);
});

/* Update a given project */
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

/* Delete a given project */
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

/* Insert a new task in given project */
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id, title } = req.body;

  const project = projects.find(p => p.id == id);
  console.log(project);
  project.tasks.push(title);

  return res.json(project);
});

server.listen(3333);
