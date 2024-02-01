
import { fastify } from "fastify"; 
import { DataBaseMemory } from './databse-memory.js'

const server = fastify()

const database = new DataBaseMemory()

server.get('/', (req,res) => {
    return '1.0.0'
})

server.get('/videos', (req,res) => {
    const search =  req.query.search

    const videos = database.list(search)

    return res.status(200).send(videos)
})

server.get('/node', (req) => {
    const search =  req.query
    console.log(search)
    return 'Hello Node JS'
})

// Request Body
server.post('/videos', (req,res) => {
    const { title, url } = req.body;
    
    database.create({
        title,
        url
    })
    
    return res.status(201).send()
    
})

server.put('/videos/:id', (req,res) => {
    const videoId = req.params.id
    const { title, url } = req.body;

    database.update(videoId, {
        title,
        url
    })
    
    return res.status(204).send()
})

server.delete('/videos/:id', (req,res) => {
    const videoId = req.params.id

    database.delete(videoId)
    
    return res.status(204).send()
})

server.listen({
    port: 3333,
})

