import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'trainer',
  
  index(req, res) {
    db.trainer.find(
      (err, trainers) => res.json(trainers)
    );
  }
  
});
