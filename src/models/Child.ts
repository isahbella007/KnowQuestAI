import { IChild } from "@name-not-decided/shared-types";
import { model, Schema } from "mongoose";

// define an enum for the gender 
const genderEnum = { 
    female: 'female', 
    male: 'male', 
    NA: 'n/a'
}

const gradeEnum = { 
    JS1: 'JSS1',
    JS2: 'JSS2', 
    JS3: 'JSS3', 
    SS1: 'SS1',
    SS2: 'SS2',
    SS3: 'SS3'
}
const childSchema = new Schema<IChild>({ 
    name: {type: String, required: true}, 
    username: {type: String, required: false}, 
    password: {type: String, required: true}, 
    gender: {type: String, enum: Object.values(genderEnum), required: true }, 
    age: {type: Number, required: false}, 
    school: {type: String, required: false}, 
    grade: {type: String, enum: Object.values(gradeEnum), required: true}
}, {timestamps: true })

const ChildModel = model<IChild>('child', childSchema)
export default ChildModel