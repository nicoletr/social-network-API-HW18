const { Schema, model } = require('mongoose');
const validator = require('validator');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: [ true, "Email required" ],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email",
        isAsync: false
      },
      max_length: 50,
    },
    thoughts: [ 
      { 
        type: Schema.Types.ObjectId, 
        ref: 'Thought' 
      } 
    ],
    friends: [ 
      { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
      } 
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//Virtual for friendCount
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
