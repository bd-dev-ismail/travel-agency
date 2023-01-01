const { MongoClient, ServerApiVersion} = require("mongodb");


const uri = process.env.DB_URL;



const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
})
const clientPromise = client.connect()
export default clientPromise;


