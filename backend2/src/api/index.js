import { Router } from 'express';
import publicGyms from './public/gyms';
import publicEvents from './public/events';
import publicTrainers from './public/trainers';
import publicClasses from './public/classes';
import adminGyms from './admin/gyms';
import adminGymLogin from './admin/gymLogin';
import adminTrainers from './admin/trainers';
import adminGymTrainers from './admin/gymTrainers';
import adminClasses from './admin/classes';
import adminGymClasses from './admin/gymClasses';
import adminEvents from './admin/events';
import adminGymEvents from './admin/gymEvents';
import jwt from 'jsonwebtoken';

export default ({ config, db }) => {
  
  let api = Router();
  
  api.use('/gyms', publicGyms({ config, db }));
  api.use('/trainers', publicTrainers({ config, db }));
  api.use('/classes', publicClasses({ config, db }));
  api.use('/events', publicEvents({ config, db }));
  
  api.use('/admin/gyms/login', adminGymLogin({ config, db }));
  
  api.use(function(req, res, next) {
    let token = req.body.access_token || req.query.access_token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, 'gymSecretToken', function(err, decoded) {
        if (err) {
          console.log(err);
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  });
  
  api.use('/admin/gyms', adminGyms({ config, db }));
  api.use('/admin/trainers', adminTrainers({ config, db }));
  api.use('/admin/gymTrainers', adminGymTrainers({ config, db }));
  api.use('/admin/classes', adminClasses({ config, db }));
  api.use('/admin/gymClasses', adminGymClasses({ config, db }));
  api.use('/admin/events', adminEvents({ config, db }));
  api.use('/admin/gymEvents', adminGymEvents({ config, db }));
  
  return api;
};
