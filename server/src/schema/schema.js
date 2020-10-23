const { gql } = require('apollo-server-express');
const userDb = require('../dataAccessModels/user');
const postDb = require('../dataAccessModels/post');

const userMock = [
  {
    id: 1,
    name: 'Marian',
    username: '23_majo_brz',
    age: 27,
    gender: 'Mujer',
    isVerified: true,
    posts: [
      {
        id: 1,
        type: 'image',
        url:
          'https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        caption: 'Aiinss! Me encanta el cafe!',
        interactions: {
          id: 2,
          userId: 1,
          likes: ['PedroID', 'WendyID', 'MariaID', 'DavidID'],
          shares: ['name', 'who', 'share'],
          saved: true,
          comments: [
            {
              userCommenterId: 2,
              comment: 'Se ve brutal el cafe!',
            },
            {
              userCommenterId: 3,
              comment: 'Hay yo quiero!',
            },
          ],
        },
      },
    ],
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    age: Int
    gender: String
    isVerified: Boolean
    posts: [Posts]
  }

  type Posts {
    userId: ID!
    type: String!
    url: String!
    caption: String!
    interactions: Interactions
  }

  type Interactions {
    likes: [ID]
    comments: [Comments]
    shares: [ID]
    saved: Boolean
  }

  type Comments {
    userCommenterId: ID
    comment: String
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    addUser(
      firstname: String!
      lastname: String
      username: String!
      email: String!
      age: Int
      gender: String
    ): User

    addPost(userId: ID!, type: String!, url: String!, caption: String): Posts
  }
`;

const resolvers = {
  Query: {
    user(parent, args) {
      return userDb.findById(args.id);
    },
  },
  User: {
    posts(parent, args) {
      return userMock.find((user) => user.posts[0].id === +parent.id).posts;
    },
  },
  Posts: {
    interactions(parent, args) {
      return userMock.find((user) => user.posts[0].id === +parent.id).posts[0]
        .interactions;
    },
  },
  Interactions: {
    comments(parent, args) {
      return userMock.find((user) => user.posts[0].id === +parent.userId)
        .posts[0].interactions.comments;
    },
  },
  Mutation: {
    addUser(parent, args) {
      const newUser = new userDb({
        firstname: args.firstname,
        lastname: args.lastname,
        username: args.username,
        email: args.email,
        age: args.age,
        gender: args.gender,
      });

      return newUser.save();
    },
    addPost(parent, args) {
      const newPost = new postDb({
        userId: args.userId,
        type: args.type,
        url: args.url,
        caption: args.caption,
      });

      return newPost;
    },
  },
};

module.exports = { typeDefs, resolvers };
