import { Schema, model, models } from 'mongoose';

const userdata = new Schema({
    username : String,
    email: String,
    password: String
})

const Users = models.user || model('user', userdata);

export default Users;