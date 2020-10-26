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
    type: String!
    url: String!
    caption: String!
    interactions: Interactions
  }

  type Interactions {
    likesTo: [ID]
    shares: [ID]
    saved: [String]
    comments: [Comments]
  }

  type Comments {
    writtenBy: ID
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

    addInteraction(
      postId: ID!
      likesTo: ID
      shares: ID
      saved: String
    ): Interactions

    addComment(postId: ID!, writtenBy: String!, comment: String!): Comments
  }
`;

const resolvers = {
  Query: {
    user(parent, args) {
      return userDb.findById(args.id);
    },
  },
  User: {
    async posts(parent, args) {
      const userPostsPopulated = await userDb
        .findById(parent._id)
        .populate('posts')
        .exec();

      return userPostsPopulated.posts;
    },
  },
  Posts: {
    async interactions(parent, args) {
      const userPostInteranctions = await postDb.findById(parent._id);

      return userPostInteranctions.interactions;
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
    async addPost(parent, args) {
      const newPost = new postDb({
        type: args.type,
        url: args.url,
        caption: args.caption,
      });

      const userPosting = await userDb.findById(args.userId);
      userPosting.posts.push(newPost);

      userPosting.save();

      return newPost.save();
    },

    async addInteraction(parent, args) {
      const userReceiver = await postDb.findById(args.postId);
      console.log(userReceiver.interactions);
      /* const newInteractionData = {
        ...userReceiver.interactions,
        likesTo: [...userReceiver.interactions.likesTo, args.likesTo],
        shares: args.shares,
        saved: args.saved,
      };
      userReceiver.interactions = newInteractionData;
      userReceiver.save();

      return userReceiver.interactions; */
    },

    async addComment(parent, args) {
      const userReceiver = await postDb.findById(args.postId);
      const newCommentData = {
        ...userReceiver.interactions.comments,
        writtenBy: args.writtenBy,
        comment: args.comment,
      };

      userReceiver.interactions.comments = newCommentData;
      userReceiver.save();

      return userReceiver.interactions.comments;
    },
  },
};

module.exports = { typeDefs, resolvers };
