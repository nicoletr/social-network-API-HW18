const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

//Function to format date
function formatDate(date) {
  formattedDate = moment(date).format('MMMM Do YYYY, h:mm a');
  return formattedDate;
}

module.exports = { reactionSchema };
