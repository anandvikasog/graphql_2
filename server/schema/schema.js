const Project = require("../models/Project");
const Client = require("../models/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ClientCreateResultType = new GraphQLObjectType({
  name: "ClientCreateResult",
  fields: () => ({
    status: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    data: { type: ClientType },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve: async (parent, args) => {
        const result = await Client.findById(parent.clientId);
        return result;
      },
    },
  }),
});

// query -----
const queries = new GraphQLObjectType({
  name: "Queries",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve: async () => {
        const result = await Client.find();
        return result;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const result = await Client.findById(args.id);
        return result;
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async () => {
        const result = await Project.find();
        return result;
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const result = await Project.findById(args.id);
        return result;
      },
    },
  },
});

// mutation -----
const mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addClient: {
      type: ClientCreateResultType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const { name, email, phone } = args;
        const newClient = new Client({
          name,
          email,
          phone,
        });

        let result;

        try {
          result = await newClient.save();
        } catch (err) {
          console.log(err)
          return {
            status: false,
            message: "Something went wrong",
            error: err,
          };
        }

        return {
          status: true,
          message: "Client created successfully",
          data: result,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});
