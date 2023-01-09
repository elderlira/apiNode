import Router from "express";
import budgetControler from '../controller/budget.js'

const router = Router()

router.post('/', budgetControler.create)
router.get('/:id', budgetControler.getById)

export default router