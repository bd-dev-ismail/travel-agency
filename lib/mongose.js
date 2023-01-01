import mongoose from 'mongoose';
const connectMongo = async () => {
    
 
const adminUser = process.env.DB_USER;
const adminPassword = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${adminUser}:${adminPassword}@cluster0.i7ulodc.mongodb.net/?retryWrites=true&w=majority`
   
    try {
        const { connection } = await mongoose.connect(uri);

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;