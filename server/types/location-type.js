const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        _id: { type: GraphQLID },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
    }),
});

module.exports = LocationType;
