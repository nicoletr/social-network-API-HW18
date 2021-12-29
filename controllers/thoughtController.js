const { User, Thought } = require('../models');

module.exports = {
  getThoughts() {
    Thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getSinglethought() {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .lean()
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createThought() {
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
  },

  deleteThought() {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({
              message: 'User deleted, but no reactions found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought() {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((thought) =>
      !thought
      ? res.status(404).json({ message: `No thought with that ID`})
      : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },

  addReaction() {

  },

  removeReaction() {

  }
};