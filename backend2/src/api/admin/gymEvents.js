import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'adminGymEvents',
  
  index(req, res) {
    db.event.find(
      {gymId: req.query.gymId},
      (err, event) => res.json(event)
    );
  },
  
  create(req, res) {
    req.body.gymId = req.query.gymId;
    db.event.save(
      req.body,
      (err, event) => res.json(event)
    );
  },
  
});
