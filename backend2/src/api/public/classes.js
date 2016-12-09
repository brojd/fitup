import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'classes',
  
  index(req, res) {
    db.classes.find(
      (err, classes) => res.json(classes)
    );
  }
  
});
