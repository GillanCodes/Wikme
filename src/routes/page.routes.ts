import { Router } from "express";
let router:Router = Router();

import {
    updatePageContent,
    deletePage
} from "../controllers/page.controller";

router.patch('/:id', updatePageContent);
router.delete('/:id', deletePage);

export default router;