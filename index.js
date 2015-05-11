module.exports = function(radish) {
  return require('./readers/mongo')(radish);
}

module.exports.radish = 2;
module.exports.plugin = 'MongoReader';
