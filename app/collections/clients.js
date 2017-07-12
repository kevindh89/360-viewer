import './models/clients.js';
import './schemas/clients.js';

Clients = new Mongo.Collection('clients', {
    transform: doc => new Client(doc)
});

Clients.attachSchema(ClientSchema);
