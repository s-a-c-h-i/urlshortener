import express from 'express'
import { newurl,
     geturl,
       getAnalysis
    } from '../controllers/url.js'
 const router = express.Router()

router.post('/',newurl)
router.get('/:id',geturl)
router.get('/analysis/:id',getAnalysis)

export default router