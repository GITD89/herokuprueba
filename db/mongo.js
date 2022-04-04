const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://felix:1234@cluster0.lzoap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'loginDB';

module.exports = {client, dbName};