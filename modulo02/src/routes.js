import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Kadmo Hardy',
    email: 'kadmothadeu@gmail.com',
    password_hash: 'napstera',
    // provider: true,
  });
  return res.json(user);
});

export default routes;
