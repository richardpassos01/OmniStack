'use strict'

const router = require('express').Router()
const PostController = require('../controllers/PostController')
const LikeController = require('../controllers/LikeController')
const uploadConfig = require('../config/upload')
const multer = require('multer')(uploadConfig)

router.get('/posts', PostController.index)
router.post('/posts', multer.single('image'), PostController.store)
router.post('/posts/:id/like', LikeController.like)
router.post('/posts/:id/unLike', LikeController.unLike)


module.exports = router