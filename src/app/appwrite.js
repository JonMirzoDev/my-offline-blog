import { Client, Account, Databases } from 'appwrite'

export const client = new Client()

export const databases = new Databases(client)

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('655460f2d23bc8ea8adf')

export const account = new Account(client)
export { ID } from 'appwrite'
