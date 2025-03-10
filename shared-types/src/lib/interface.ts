import { Types } from "mongoose";

export interface IParent {
  _id: Types.ObjectId;
  name: string;
  email?: string;
  password?: string;
  child?: Types.ObjectId[]; 
  authProvider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChild{ 
    _id: Types.ObjectId; 
    name: string;
    username?: string; 
    password: string; //parents will generate their child's password in the beginning 
    gender?: string; 
    age?: number; 
    school?: string; 
    grade: string; 
    createdAt: Date;
    updatedAt: Date;
}