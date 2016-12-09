import resource from 'resource-router-middleware';
import mongojs from 'mongojs';

export default ({ db }) => resource({
  
  id : 'adminGymClasses',
  
  index(req, res) {
    db.classes.find(
      {gymId: req.query.gymId},
      (err, classes) => res.json(classes)
    );
  },
  
  create(req, res) {
    req.body.gymId = req.query.gymId;
    db.classes.save(
      req.body,
      (err, classes) => res.json(classes)
    );
  },
  
  read(req, res) {
    db.classes.findOne(
      { $and: [ {_id: mongojs.ObjectId(req.params.adminGymClasses)}, {gymId: req.query.gymId} ] },
      (err, classes) => res.json(classes)
    );
  }
  
});
