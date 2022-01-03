const { Schema } = require('mongoose')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // default: new ObjectId   ???
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
      get: formatDate
    },
  },
  {
    toJSON: {
      getters: true
    },
  }
);

//Function to format date
function formatDate(date) {
  moment(date).format('MMMM Do YYYY, h:mm a')
}

module.exports = { reactionSchema }