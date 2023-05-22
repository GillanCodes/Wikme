import { Router } from "express";

let router:Router = Router();

router.get('/');
router.post('/');
router.patch('/:id');
router.delete('/:id');

export default router;