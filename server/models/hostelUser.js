import mongoose, { model,Schema } from "mongoose";

const hostelUserSchema=new Schema({
//   username:{
//         type:String,
//         required:true,
//         default:
//   },
    fullname:{
        type:String,
        required:[true,"Fullname is required.Enter your Fullname"],
        trim:true,
        min:3

    },
    email:{
        type:String,
        required:[true,"email is required.Enter your email"],
        trim:true,
        // match:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"


    },
    password:{
        type:String,
        required:[true,"Password is required.Enter your Password"],
        trim:true,
        min:8
    },
    phone:{
        type:String,
        trim:true,


    },
    state:{
        type:String,
        required:[true,"State is required.Select your State"],
        trim:true,
       

    },
    city:{
        type:String,
        required:[true,"city is required.Select your City"],
        trim:true,
       

    },
    status:{
        type:String,
        required:true,
        enum:["ACTIVE","SUSPENDED","DISABLED"],
        default:"ACTIVE"
    },
    deletedAt:{
        type:Date,
        default:null
    },
    hostelId:{
        type: Schema.Types.ObjectId,
         
       
        trim:true,
       default:null,
    }
   
  
},
 {
        strict:'throw',
        timestamps:true,
       

 }
)

const hostelUser=model("hostelUser",hostelUserSchema);
export default hostelUser;