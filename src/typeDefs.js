const typeDefs = `
type Author {
  id: ID!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: ID!
  title: String
  body: String
  author: Author
  votes: Int
}

# the schema allows the following query:
type Query {
  posts: [Post]
}

# this schema allows the following mutation:
type Mutation {
  upvotePost (
    postId: ID!
  ): Post
}

# we need to tell the server which types represent the root query
schema {
  query: Query
  mutation: Mutation
}
`;

export default typeDefs;
