const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts,
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .lean()
      .then(async (thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought with that ID' })
          : res.json({
              thought,
            }),
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought with that ID' })
          : Thought.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true },
            ),
      )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({
              message: 'User deleted, but no reactions found',
            })
          : res.json({ message: 'Thought successfully deleted' }),
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: `No thought with that ID` })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    console.log('You are reacting to this thought');
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true },
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought with that ID' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err));
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true },
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought with that ID' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err));
  },
};
