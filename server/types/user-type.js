const graphql = require('graphql');
const LocationType = require('./location-type');
const Locations = require('./../models/location');

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLNonNull } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLString },
        friend: { type: new GraphQLNonNull(GraphQLBoolean) },
        avatar: { type: GraphQLString },
        kind: { type: GraphQLString },
        gender: { type: GraphQLString },
        locationID: { type: GraphQLID },
        location: {
            type: LocationType,
            resolve(parent) {
                return Locations.findById(parent.locationID);
            },
        },
    }),
});

module.exports = UserType;
