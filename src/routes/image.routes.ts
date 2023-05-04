import { Router } from "express";
let router:Router = Router();

import { getImages, postImage } from "../controllers/image.controller";

router.get('/', getImages);
router.post('/', postImage);

export default router;
