import express from 'express'
import { newUrl, getUrl, getAnalysis } from '../controllers/url.js'
const router = express.Router()

router.post('/',newUrl)
router.get('/:id',)
router.get('/analysis/:id',)

export default router