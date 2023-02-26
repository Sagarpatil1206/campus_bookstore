import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

import postRoutes from './routes/post.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

mongoose.set("strictQuery",false);
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://books_resale:Sagar%401206@cluster0.pmtakm7.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
	.then(()=>app.listen(PORT,()=>console.log(`Server is running on a PORT : ${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));