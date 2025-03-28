import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortid: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  redirectUrl: {   
    type: String,
    required: true,
  },
  visitHistory: [{
    timestamp: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0,
        message: 'Timestamp must be a positive number'
      }
    }
  }]
}, {
  timestamps: true
});

const Url = mongoose.model('Url', urlSchema);
export default Url;
