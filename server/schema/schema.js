const graphql = require('graphql');
const UserType = require('./../types/user-type');
const LocationType = require('./../types/location-type');
const { LIMIT_ITEMS } = require('./../constants');
const Users = require('./../models/users');
const Locations = require('./../models/location');

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLSchema } = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                status: { type: GraphQLString },
                friend: { type: new GraphQLNonNull(GraphQLBoolean) },
                avatar: { type: GraphQLString },
                kind: { type: GraphQLString },
                gender: { type: GraphQLString },
                locationID: { type: GraphQLID },
            },
            resolve(parent, args) {
                const user = new Users({
                    name: args.name,
                    status: args.status,
                    friend: args.friend,
                    avatar: args.avatar,
                    kind: args.kind,
                    gender: args.gender,
                    locationID: args.locationID,
                });

                return user.save();
            },
        },
        updateUserStatus: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                status: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            status: args.status,
                        },
                    },
                    { new: true },
                );
            },
        },
        updateFollow: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                friend: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            friend: args.friend,
                        },
                    },
                    { new: true },
                );
            },
        },
        updateUserLocationId: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                locationID: { type: GraphQLID },
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            locationID: args.locationID,
                        },
                    },
                    { new: true },
                );
            },
        },
        addLocation: {
            type: LocationType,
            args: {
                city: { type: GraphQLString },
                country: { type: GraphQLString },
            },
            resolve(parent, args) {
                const location = new Locations({
                    city: args.city,
                    country: args.country,
                });

                return location.save();
            },
        },
        updateLocation: {
            type: LocationType,
            args: {
                id: { type: GraphQLID },
                city: { type: GraphQLString },
                country: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Locations.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            city: args.city,
                            country: args.country,
                        },
                    },
                    { new: true },
                );
            },
        },
    },
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        location: {
            type: LocationType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Locations.findById(args.id);
            },
        },
        locations: {
            type: new GraphQLList(LocationType),
            resolve() {
                return Locations.find({});
            },
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Users.findById(args.id);
            },
        },
        users: {
            type: new GraphQLList(UserType),
            args: { part: { type: GraphQLInt } },
            resolve(parent, args) {
                return Users.find({}, null, { skip: args.part * LIMIT_ITEMS, limit: LIMIT_ITEMS });
            },
        },
        friends: {
            type: new GraphQLList(UserType),
            args: { friend: { type: GraphQLBoolean }, part: { type: GraphQLInt } },
            resolve(parent, args) {
                return Users.find({ friend: args.friend }, null, { skip: args.part * LIMIT_ITEMS, limit: LIMIT_ITEMS });
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
