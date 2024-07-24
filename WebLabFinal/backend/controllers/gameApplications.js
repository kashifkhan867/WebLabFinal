// controllers/gameApplications.js

import gameApplicationModel from "../models/gameApplication.js";

export const getApplications = async (req, res) => {
    try {
        const gameApplications = await gameApplicationModel.find();
        res.status(200).json(gameApplications);
    } catch (error) {
        console.log("GET error:", error.message);
        res.status(404).json({ message: error.message });
    }
};

export const createApplication = async (req, res) => {
    const Name = req.body.name;
    const  Email = req.body.email;
    const   Phone = req.body.phone;
    const Address = req.body.address;
    const Message = req.body.message;

    const newApplicant = new gameApplicationModel({
       name: Name,
       email: Email,
       phone: Phone,
       address: Address,
       message: Message,

    });

    try {
        await newApplicant.save();
        res.status(201).json(newApplicant);
    } catch (error) {
        console.log("Creation error:", error.message);
        res.status(500).json({ message: error.message });
    }  
};
