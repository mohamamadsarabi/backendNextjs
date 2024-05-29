import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
}

let client
let clientPromise

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise    