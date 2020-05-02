const graphql = require('graphql');
const Movies = require('./../models/movie');
const Directors = require('./../models/director');

/**
 * @param GraphQLObjectType constructor for data scheme
 * @param GraphQLString type field
 * @param GraphQLID type for id
 */
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLSchema, GraphQLList } = graphql;

// const movies = [
//     { id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1' },
//     { id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2' },
//     { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3' },
//     { id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4' },
//     { id: '5', name: 'Reservoir Dogs', genre: 'Crime', directorId: '1' },
//     { id: '6', name: 'The Hateful Eight', genre: 'Crime', directorId: '1' },
//     { id: '7', name: 'Inglourious Basterds', genre: 'Crime', directorId: '1' },
//     { id: '7', name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-Comedy', directorId: '4' },
// ];

// const directors = [
//     { id: '1', name: 'Quentin Tarantino', age: 55 },//5ead9a8d9633bebe7b53237f
//     { id: '2', name: 'Michael Radford', age: 72 },//5ead9d299633bebe7b532382
//     { id: '3', name: 'James McTeigue', age: 51 },//5ead9d599633bebe7b532383
//     { id: '4', name: 'Guy Ritchie', age: 50 },//5ead9d6c9633bebe7b532384
// ];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        directorId: { type: GraphQLID },
        director: {
            type: DirectorType,
            resolve(parent) {
                return Directors.findById(parent.directorId);
            },
        },
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent) {
                return Movies.find({ directorId: parent.id });
            },
        },
    }),
});

/**
 * @description mutation request
 */
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parent, args) {
                const director = new Directors({
                    name: args.name,
                    age: args.age,
                });

                return director.save();
            },
        },
        addMovie: {
            type: MovieType,
            args: {
                name: {type: GraphQLString},
                genre: {type: GraphQLString},
                directorId: {type: GraphQLID},
            },
            resolve(parent, args) {
                const movie = new Movies({
                    name: args.name,
                    genre: args.genre,
                    directorId: args.directorId
                });

                return movie.save();
            }
        }
    },
});

/**
 * @description root request, describe all requery
 */
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movies: {
            type: new GraphQLList(MovieType),
            resolve() {
                return Movies.find({});
            },
        },
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Movies.findById(args.id);
            },
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve() {
                return Directors.find({});
            },
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Directors.findById(args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
