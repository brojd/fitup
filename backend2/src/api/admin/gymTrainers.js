import resource from 'resource-router-middleware';
import mongojs from 'mongojs';

export default ({ db }) => resource({
  
  id : 'adminGymTrainer',
  
  index(req, res) {
    db.trainer.find(
      {gymId: req.query.gymId},
      (err, trainers) => res.json(trainers)
    );
  },
  
  create({ body }, res) {
    db.trainer.save(
      body,
      (err, trainer) => res.json(trainer)
    );
  },
  
  read(req, res) {
    db.trainer.findOne(
      { _id: mongojs.ObjectId(req.params.adminGymTrainer), gymId: req.query.gymId },
      (err, trainer) => res.json(trainer)
    );
  }
  
});
