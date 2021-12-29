const { Schema, model } = require('mongoose')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //get: format date
    },
  },
  {
    toJSON: {
      getters: true
    },
  }
);

//format date 

module.exports = { reactionSchema }