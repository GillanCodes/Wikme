import { Router } from "express";
let router:Router = Router();

import {
    pageUpdate,
    deletePage
} from "../controllers/page.controller";

router.patch('/:id', pageUpdate);
router.delete('/:id', deletePage);

export default router;