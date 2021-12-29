const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //email validation
      max_length: 50,
    }
    //thoughts: _id values from Thought model
    //friends: _id values from User model (self-referencing)
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//Virtual for friendCount

const User = model('user', userSchema);

module.exports = User;
