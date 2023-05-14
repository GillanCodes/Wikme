import { Router } from "express";
let router:Router = Router();

import multer = require("multer");
const upload = multer();

import { deleteImage, getImages, postImage } from "../controllers/image.controller";

router.get('/', getImages);
router.post('/', upload.single('picture'), postImage);
router.delete('/', deleteImage);

export default router;
