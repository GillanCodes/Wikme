import { Router } from "express";
let router:Router = Router();

import multer = require("multer");
const upload = multer();

import { getImages, postImage } from "../controllers/image.controller";

router.get('/', getImages);
router.post('/', upload.single('picture'), postImage);

export default router;
