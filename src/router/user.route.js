import Router from 'express'
import userController from '../controller/user.js'

const router = Router()

// router.get('/',  userController.index)

router.get('/', userController.getAll)

router.get('/:id', userController.getById)

router.post('/', userController.create)

router.put('/:id', userController.update)

router.delete('/:id', userController.remove)


export default router
