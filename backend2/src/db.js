import mongojs from 'mongojs';

export default callback => {
  let uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  let db = mongojs(uri, ['gym', 'trainer', 'classes', 'event']);
  callback(db);
};
