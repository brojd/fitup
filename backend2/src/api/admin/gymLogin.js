import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';

export default ({ db }) => resource({
  
  id : 'adminGymLogin',
  
  create({ body }, res) {
    
    db.gym.findOne(
      {email: body.email},
      {},
      (err, user) => {
    
        if (err) throw err;
      
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
          if (user.password != body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
            var token = jwt.sign(user, 'gymSecretToken', {
              expiresIn: '24h'
            });

            res.json({
              success: true,
              token: token,
              userId: user._id
            });
          }
        }
      }
    );
  }
  
});
