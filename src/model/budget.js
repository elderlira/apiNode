import mongoose from "mongoose";
import { Schema } from "mongoose";

const budgetSchema = new Schema({
    id: { type: String },
    idService: { type: String },
    description: { type: String },
    number: { type: Number },
    value: { type: Number },
})

const budget = mongoose.model('buget', budgetSchema)

export default budget