const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/travelgram';

module.exports = {
  dbUri: dbUri,
  port: port
};
