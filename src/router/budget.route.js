import Router from "express";
import budgetControler from '../controller/budget.js'

const router = Router()

router.post('/', budgetControler.create)

export default router