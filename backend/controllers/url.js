import {nanoid} from 'nanoid';
import Url from '../../models/url.js';

export const newurl = async (req, res) => {
    const body=req.body
    if(!body.url) return res.status(400).json({message:"url is required"});     
    const newid=nanoid(5);
    
    try {
      const newUrl = new Url.find({shortid:newid,redirecturl:body.url,visitHistory:[]});
      await newUrl.save();
      res.status(200).json(newUrl);
    } catch (error) {
      res.status( 500).json({ message: error.message });
    }
  };


//   export const geturl = async (req, res) => {
    
//     try {
//       const originalurl = await Url.find({redirecturl=req.params.redirecturl}); 
//       res.status(200).json(originalurl);
//     } catch (error) {
//       res.status( 500).json({ message: error.message });
//     }
//   };

//   export const geturlanalytics = async (req, res) => {
    
//     try {
//       const {visitHistory} = await Url.find({redirecturl=req.params.redirecturl}); 
//       res.status(200).json(originalurl);
//     } catch (error) {
//       res.status( 500).json({ message: error.message });
//     }
//   };




