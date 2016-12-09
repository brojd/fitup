import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'event',
  
  index(req, res) {
    db.event.find(
      (err, event) => res.json(event)
    );
  }
  
});
