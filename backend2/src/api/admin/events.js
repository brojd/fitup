import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'adminEvent',
  
  index(req, res) {
    db.event.find(
      (err, event) => res.json(event)
    );
  },
  
  update(req, res) {
    req.body.gymId = req.query.gymId;
    if (req.body._id) {
      delete req.body._id;
    }
    db.event.update(
      { id: Number(req.params.adminEvent) },
      req.body,
      {},
      () => res.send(req.body));
  },
  
  delete(req, res) {
    db.event.remove(
      { id: Number(req.params.adminEvent) },
      () => res.send(req.body)
    );
  }
  
});
