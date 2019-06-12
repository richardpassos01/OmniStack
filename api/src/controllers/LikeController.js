const Post = require('../models/Post')

module.exports = {
    async like(req, res) {
        const post = await Post.findById(req.params.id)
        post.likes += 1
        await post.save()

        req.io.emit('like', post)
        return res.json(post)
    },
    async unLike(req, res) {
        const post = await Post.findById(req.params.id)
        if(post.likes > 0)  {
            post.likes -= 1
            req.io.emit('unlike', post)
            await post.save()
        }

        return res.json(post)
    }
}