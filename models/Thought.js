const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate
    },
    username: {
      // ref: 'User'  ??
      type: String,
      required: true
    },
    reactions: [ reactionSchema ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

//Function to format date
function formatDate(date) {
  moment(date).format('MMMM Do YYYY, h:mm a')
}

//Virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;