import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://houseofhavanadb_db_user:PObZPwu9WEXGPDLN@blogs.lnnog7m.mongodb.net/?appName=Blogs";
// const uri = process.env.MONGODB_URI!;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise || global._mongoUri !== uri) {
  global._mongoUri = uri;
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise!;

export default clientPromise;
