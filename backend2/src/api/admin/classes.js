import resource from 'resource-router-middleware';
import mongojs from 'mongojs';

export default ({ db }) => resource({
  
  id : 'adminClasses',
  
  index(req, res) {
    db.classes.find(
      (err, classes) => res.json(classes)
    );
  },
  
  update(req, res) {
    req.body.gymId = req.query.gymId;
    if (req.body._id) {
      delete req.body._id;
    }
    db.classes.update(
      { _id: mongojs.ObjectId(req.params.adminClasses) },
      req.body,
      {},
      () => res.send(req.body));
  },
  
  delete(req, res) {
    db.classes.remove(
      { _id: mongojs.ObjectId(req.params.adminClasses) },
      () => res.send(req.body)
    );
  }
  
});
