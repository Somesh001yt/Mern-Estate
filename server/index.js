import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGODB).then(()=> {
    console.log("Connnected to MongoDb!")
}).catch((err)=>{
    console.log(err)
})



const app = express()


app.listen(3000 , ()=>{
console.log('server is running on Port 3000')
})