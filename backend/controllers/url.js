import {nanoid} from 'nanoid';
import Url from '../models/url.js';

export const newurl = async (req, res) => {
  //console.log("newurl")
    const body=req.body
    if(!body.url) return res.status(400).json({message:"url is required"});     
    const newid=nanoid(5);
    console.log(body.url)
    try {
      const newUrl = new Url({
        shortid: newid,
        redirectUrl: body.url,
        visitHistory: []
      });      await newUrl.save();
      res.status(200).json(newUrl);
    } catch (error) {
      res.status( 500).json({ message: error.message });
    }
  };

export const  geturl = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await Url.findOneAndUpdate({ shortid: id },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      //{ new: true }
    );
    
    res.redirect(entry.redirectUrl)
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}  

export const getAnalysis = async (req, res) => {
const shortid = req.params.id;
console.log(shortid)
try{
const entry = await Url.findOne({ shortid: shortid });
console.log(entry)
res.status(200).json({totalclicks:entry.visitHistory.length,
  analytics:entry.visitHistory});
 
}

catch(error){
  res.status(500).json({ message: error.message });}
}
