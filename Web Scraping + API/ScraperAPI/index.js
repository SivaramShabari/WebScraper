import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import mongodb from 'mongodb'
const app = express()
app.use(cors())
console.log("hi")
const PORT = 3003;
const ATLAS_URI = 'mongodb+srv://sivaram:sivaram@cluster0.oigz9.mongodb.net/web?retryWrites=true&w=majority'

const getAll = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).send(post)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

export const createPost = async (req, res) => {
    const post1 = req.body;
    const newPost = new Post(post1);
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

app.get('/11', getAll)
app.post('/p', createPost)
mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(e => console.log(e.message, "CustomError"))


const imgSchema = mongoose.Schema({
    img: String
})

const Post = mongoose.model('images', imgSchema)

