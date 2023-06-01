const express = require('express');
const postRouter = express.Router();
const multer = require('multer');
const {getAllPost, createPost, updatePost, getSpecificPost} = require('../controllers/postController');
const uploadMiddleware = multer({ dest: 'uploads/' });

postRouter
.route('/')
.get(getAllPost)
.post(uploadMiddleware.single('file'), createPost)
.patch(uploadMiddleware.single('file'), updatePost);

postRouter
.route('/:id')
.get(getSpecificPost);

module.exports = postRouter;