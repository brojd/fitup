import resource from 'resource-router-middleware';
import mongojs from 'mongojs';

export default ({ db }) => resource({
  
  id : 'adminTrainer',
  
  index(req, res) {
    db.trainer.find(
      (err, trainers) => res.json(trainers)
    );
  },
  
  update(req, res) {
    req.body.gymId = req.query.gymId;
    if (req.body._id) {
      delete req.body._id;
    }
    db.trainer.update(
      { _id: mongojs.ObjectId(req.params.adminTrainer) },
      req.body,
      {},
      () => res.send(req.body));
  },
  
  delete(req, res) {
    db.trainer.remove(
      { _id: mongojs.ObjectId(req.params.adminTrainer) },
      () => res.send(req.body)
    );
  }
  
});
