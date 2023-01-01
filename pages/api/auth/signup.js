import clientPromise from "../../../lib/mongodb";
import users from '../../../models/User'
import { hash } from 'bcryptjs';

export default async function handler(req, res){
    clientPromise.catch(error => {
        if(error){
            res.json({ error: "Connection Failed...!"})
            console.log(error)
        }
    })
    // only post method is accepted
    // if(req.method === 'POST'){

    //     if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
    //     const { username, email, password } = req.body;
    //     let currentEmail = email
        
    //     // check duplicate users
    //     const checkexisting = await users.findOne({ email: currentEmail });
    //     if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

    //     // hash password
    //     users.create({  username, email, password : await hash(password, 12)}, function(err, data){
    //         if(err) return res.status(404).json({ err });
    //         res.status(201).json({ status : true, user: data})
    //     })

    // } else{
    //     res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    // }
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { username, email, password } = req.body;
        let currentEmail = email
        
        // check duplicate users
        const checkexisting = await users.findOne({ email: currentEmail });
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

        // hash password
        users.create({  username, email, password : await hash(password, 12)}, function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, user: data})
        })

        // let updateDoc = {
        //     username, email, password : await hash(password, 12)
        // }

        // let result = await users.updateOne({email: currentEmail}, updateDoc, {upsert : true})
        
        // let data = {email, username}
        // res.status(201).json({status : true, user: data})

    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}