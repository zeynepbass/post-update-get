import express from "express"
import { getPosts,CreatePost,Delete,Detay,duzenle, commentPost,likePost, goruntuPost} from "../controller/randevu.js";
const router=express.Router();
router.post('/ekle',CreatePost)
router.get('/',getPosts)
router.delete('/:id',Delete);
router.get('/:id',Detay);
router.put('/:id',duzenle);
export default router