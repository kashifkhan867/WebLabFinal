// schema to save cartitems

import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String
});

const cartModel = mongoose.model("cartItem", cartSchema);

export default cartModel;