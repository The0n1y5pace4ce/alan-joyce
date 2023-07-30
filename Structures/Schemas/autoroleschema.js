const mongoose = require('mongoose');

const autoRoleSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true
  },
  roleId: {
    type: String,
    required: true
  },
  showMessage: {
    type: Boolean,
    default: false
  },
  channelId: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('AutoRole', autoRoleSchema);
