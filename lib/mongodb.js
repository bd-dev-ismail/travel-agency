const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const adminUser = process.env.DB_USER;
const adminPassword = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${adminUser}:${adminPassword}@cluster0.i7ulodc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
})
const clientPromise = client.connect()
export default clientPromise;