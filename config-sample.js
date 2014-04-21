var config = {};

config.twilio = {};
config.twilio.authToken = 'xxx';
config.twilio.messagingUrl = 'https://YOUR_SUBDOMAIN.ngrok.com/vote/sms';
config.twilio.disableSigCheck = false;

module.exports = config;
