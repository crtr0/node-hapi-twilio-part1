var twilio = require('twilio')
  , config = require('../config')
  , Hapi;

module.exports = function(hapi) {
  Hapi = hapi
  return exports;
};

var fromTwilio = function(request) {
  var sig  = request.headers['x-twilio-signature']
    , url  = config.twilio.messagingUrl + request.url.search
    , body = request.payload || {};

  return twilio.validateRequest(config.twilio.authToken, sig, url, body);
};

var voteSMS = exports.voteSMS = function(request, reply) {
  if (fromTwilio(request) || config.twilio.disableSigCheck) {
    var resp = new twilio.TwimlResponse();  
    resp.message('Thanks for voting!');
    reply(resp.toString()).type('text/xml');
  } 
  else {
    reply(Hapi.error.unauthorized('Sorry, no black hats allowed'));
  }
};


