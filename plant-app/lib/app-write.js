import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('plantapp')

const database = new Databases(client);
const account = new Account(client)
export { ID, client, database, account };