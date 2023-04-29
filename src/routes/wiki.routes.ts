import { Router } from "express";

let router:Router = Router();

import {
    getWikis,
    getWiki,
    createWiki
} from '../controllers/wiki.controller';

router.get('/', getWikis);
router.get('/:id', getWiki);
router.post('/', createWiki);


router.post('/:id');
