'use strict'

const router = require('express').Router()

// loads the controllers
const postRouter = require('./post')

// protected routes
router.use('/post', postRouter)

module.exports = router

