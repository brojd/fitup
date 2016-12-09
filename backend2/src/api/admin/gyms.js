import resource from 'resource-router-middleware';
import mongojs from 'mongojs';

export default ({ db }) => resource({
  
  id : 'adminGym',
  
  index({ params }, res) {
    db.gym.find(
      (err, gyms) => res.json(gyms)
    );
  },
  
  create({ body }, res) {
    db.gym.save(
      body,
      (err, gym) => res.json(gym)
    );
  },
  
  read(req, res) {
    db.gym.findOne(
      {_id: mongojs.ObjectId(req.params.adminGym)},
      (err, gym) => res.json(gym)
    );
  },
  
  update(req, res) {
    db.gym.update(
      { _id: mongojs.ObjectId(req.params.adminGym) },
      req.body,
      {},
      () => res.send(req.body));
  }

});
