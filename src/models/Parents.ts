import { model, Schema } from "mongoose";
import {IParent} from '@name-not-decided/shared-types'
import ChildModel from "./Child";

const ParentSchema = new Schema<IParent>({ 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    authProvider: {type: String, required: true}, 
    child: [{ 
        type: String, 
        ref: ChildModel, 
        required: false
    }]
}, {timestamps: true})

const ParentModel = model<IParent>('Parent', ParentSchema)

export default ParentModel
