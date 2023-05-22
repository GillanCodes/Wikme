import { Router } from "express";

let router:Router = Router();

import {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories,
} from "../controllers/categories.controller"

router.get('/', getCategories);
router.post('/', createCategories);
router.patch('/:id', updateCategories);
router.delete('/:id', deleteCategories);

export default router;