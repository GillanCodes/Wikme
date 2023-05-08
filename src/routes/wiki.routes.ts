import { Router } from "express";

let router:Router = Router();

//Wiki

import {
    getWikis,
    getWiki,
    createWiki,
    updateWiki
} from '../controllers/wiki.controller';

router.get('/', getWikis);
router.get('/:id', getWiki);
router.post('/', createWiki);
router.patch('/:id', updateWiki);

//Page

import {
    getPages,
    createPage,
    updatePageContent
} from "../controllers/page.controller";

router.get('/:id/page', getPages);
router.post('/:id/page', createPage);
router.patch('/:id/page', updatePageContent);

export default router;