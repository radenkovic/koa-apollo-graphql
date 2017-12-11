const author = {
  id: 1,
  firstName: 'Dan',
  lastName: 'Radenkovic',
};

const posts = [
  {
    id: 1,
    title: 'You are running graphql on koa with apollo server',
    body: 'This is just a dummy sample post',
    votes: 100,
    author,
  },
];

const resolvers = {
  Query: {
    posts() {
      return posts;
    },
  },
  Mutation: {
    upvotePost() {
      const post = posts[0];
      post.votes += 1;
      return post;
    },
  },
  Author: {
    posts() {
      return posts;
    },
  },
  Post: {
    author() {
      return author;
    },
  },
};

export default resolvers;
