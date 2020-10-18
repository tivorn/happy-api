import { Router } from 'express'
import OrphanatesController from './controllers/OrphanatesController'
import multer from 'multer'

import uploadConfig from './config/upload'

const routes = Router()

const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanatesController.index)

routes.get('/orphanages/:id', OrphanatesController.show)

routes.post('/orphanages', upload.array('images') , OrphanatesController.create)

export default routes 