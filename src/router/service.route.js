import Router from "express";
import serviceController from '../controller/service.js'

const router = Router()

router.get('/', serviceController.getAll)
router.get('/:id', serviceController.getById)
router.post('/', serviceController.create)

export default router
