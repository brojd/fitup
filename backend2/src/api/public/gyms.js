import resource from 'resource-router-middleware';

export default ({ db }) => resource({
  
  id : 'gym',
  
  index({ params }, res) {
    db.gym.find(
      (err, gyms) => res.json(gyms)
    );
  }

});
