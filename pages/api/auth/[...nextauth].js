import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"

import Users from '../../../model/Schema'
import { compare } from 'bcryptjs';
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                clientPromise.catch((error) => {
                  error: "Connection Failed...!";
                });

                // check user existance
                const result = await Users.findOne( { email : credentials.email})
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'travelnext'
    }
    
})