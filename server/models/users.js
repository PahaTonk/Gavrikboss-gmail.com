const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const usersShema = new Schema({
    name: String,
    status: String,
    friend: Boolean,
    avatar: String,
    kind: String,
    gender: String,
    locationID: String,
});

module.exports = mongoos.model('Users', usersShema);
