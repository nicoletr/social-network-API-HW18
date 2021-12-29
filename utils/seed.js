const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  //const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@email.com`;

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);

  // await Thought.collection.insertOne({
  //   users: [...users],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  // console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
