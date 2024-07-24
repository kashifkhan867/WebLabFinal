// databse connectivity code

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import cartModel from './models/cartModels.js';
import gameApplications from './routes/gameApplications.js';

// server connectivity code
const app = express();
const port = process.env.PORT || 3000;

// DB connectivity code
const connectionURL = "mongodb://localhost:27017/abbott";

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Server running on port: ${port}`))
    .catch((error) => console.log(error.message));






app.listen(port);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/gameApplications', gameApplications); // Use a meaningful path here

app.post("/cartItems", async (req,res)=>{
    const item = new cartModel({
        name: req.body.name,
        image: req.body.imageSrc,
        price: req.body.price
    })
    try {
        await item.save();
    res.json({message: "Saved!"});
    } catch (error) {
        console.log(error);
        res.json({message: error})
    }
})
app.get("/cartItems", async (req, res) => {
    try {
        const gameCart = await cartModel.find();
        res.status(200).json(gameCart);
    } catch (error) {
        console.log("GET error:", error.message);
        res.status(404).json({ message: error.message });
    }
})


