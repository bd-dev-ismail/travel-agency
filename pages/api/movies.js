import clientPromise from "../../lib/mongodb";
import { hash } from 'bcryptjs';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        let users = await db.collection("users")

        if(req.method === 'POST'){

            if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
            const { username, email, password } = req.body;
            let currentEmail = email
            
            // const movies = await db
            //     .collection("users")
            //     .findOne({email: currentEmail})
            // .toArray();
            const checkexisting = await users.findOne({ email: currentEmail });
            if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});
            users.create({  username, email, password : await hash(password, 12)}, function(err, data){
                if(err) return res.status(404).json({ err });
                res.status(201).json({ status : true, user: data})
            })
    
        } else{
            res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
        }
    } catch (e) {
        console.error(e);
    }
 };