import { Client, Account } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('plantapp')

export const account = new Account(client)
