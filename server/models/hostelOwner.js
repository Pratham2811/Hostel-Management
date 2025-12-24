import { model,Schema } from "mongoose";

const hostelOwnerSchema=new Schema({
  
    Fullname:{
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
        min:4
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
        enum:["ACTIVE","SUSPENDED"],
        default:"ACTIVE"
    },
    deletedAt:{
        type:String,
        default:null
    }
   
  
},
 {
        strict:'throw',
        timestamps:true,
       

 }
)

const HostelOwner=model("HostelOwner",hostelOwnerSchema);
export default HostelOwner;