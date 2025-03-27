import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
shortid:{
    type:String,
    required:true,
    unique:true,
},
redirecturl:{   
    type:String,
    required:true,
}
,
 visitHistory:[{timestamp:{type:Number  }}]
 

},{
    timestamps:true
})

const Url = mongoose.model('Url', urlSchema);
export default Url;