import Post from "../models/RandevuMessage.js" 

import mongoose from 'mongoose';


const getPosts=async (req,res)=>{

    try {
        const postMessage=await Post.find();
        res.status(200).json(postMessage)
     
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const CreatePost=async (req,res)=>{

    const post=req.body;

    const newPost=new Post({...post});
    //postun tüm alanlarını getirdik creator kullanıcının ıd tutucak saatı yerel saatı kullandık toıso kısmı saatı aktardık bu creator kısmı burda ekelndı o yuzden form kısmından sildik

    try {

        await newPost.save(); //veritabanına kaydeder
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
	
	//HTTP STATUS CODE ları inceleyelim
	//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
}

const Delete=async (req,res)=>{
    const {id:_id}=req.params;


    if(!mongoose.Types.ObjectId.isValid(_id))  res.status(404).send('Post silindi') //mongodb object ıd olup olmadıgını kontrol ettık
  await Post.findByIdAndRemove(_id);
  res.status(200).json({message:'post silindi'})
  
  }
  const Detay=async (req,res)=>{
    const {id}=req.params;

    try {
        const post=await Post.findById(id)

        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const duzenle=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send("post bulunamadı")
  
    const guncelPost=await Post.findByIdAndUpdate(_id,post,{new:true});
    res.status(200).json(guncelPost)
}
// const commentPost=async(req,res)=>{
//      const {id:_id}=req.params; //postun id eriştik
//     const {value}=req.body; //yorum body geldı
//     const post=await Post.findById(id)
//     post.comments.push(value); //value ekledık post ıcındekı commentse
//     const updatedPost=await PostMessage.findByIdAndUpdate(id,post,{new:true});//güncellenicek olan postun id istiyo update olmus alanları ıstıyo post yerleştirdik yeni verıyı dondurmek ıcın nev:true deriz
//     res.json(updatedPost)
// }
const commentPost= async(req,res)=>{
    const {id}=req.params;
    const {yorum}=req.body;

    const post=await Post.findById(id);

    post.comments.push(yorum);

    const updatedPost=await Post.findByIdAndUpdate(id,post,{new:true});

    res.json(updatedPost);

}
const likePost=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("Post Bulunamadı")
    const post=await Post.findById(id)
    const updatedPost=await Post.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
    res.status(200).json(updatedPost)
}
const goruntuPost=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("Post Bulunamadı")
    const post=await Post.findById(id)
    const updatedPost=await Post.findByIdAndUpdate(id,{goruntuCount:post.goruntuCount+1},{new:true})
    res.status(200).json(updatedPost)
}


export {
    getPosts,
    CreatePost,
    Delete,
    Detay,
    duzenle,
    commentPost,
    likePost,
    goruntuPost,

}