// schema to save game collections
import mongoose from 'mongoose';

const myGameSchema = mongoose.Schema(
    {
    name:String,
    email: String,
    phone: String,
    address: String,
    message:String


    }
);

const gameApplicationModel = mongoose.model('GameCollection', myGameSchema);

export default gameApplicationModel;