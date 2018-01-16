const Slugger = require('haikunator');
const slugger = new Slugger({
  defaults: {
    tokenLength: 3,
    tokenChars: 'ABCDEF0123456789',
  },
});

module.exports = slugger.haikunate.bind(slugger);
