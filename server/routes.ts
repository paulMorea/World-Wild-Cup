import * as express from 'express';

import CatController from './controllers/CatController';
import WilderController from './controllers/WilderController';
import UserController from './controllers/UserController';
// import cat from './models/cat';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const cat = new CatController();
  const wilder = new WilderController();
  const user = new UserController();

  // cats
  router.route('/cats').get(cat.getAll);
  router.route('/cats/count').get(cat.count);
  router.route('/cat').post(cat.insert);
  router.route('/cat/:id').get(cat.get);
  router.route('/cat/:id').put(cat.update);
  router.route('/cat/:id').delete(cat.delete);

  // wilders
  router.route('/wilders').get(wilder.getAll);
  router.route('/wilders/count').get(wilder.count);
  router.route('/wilder').post(wilder.insert);
  router.route('/wilder/:id').get(wilder.get);
  router.route('/wilder/:id').put(wilder.update);
  router.route('/wilder/:id').delete(wilder.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
