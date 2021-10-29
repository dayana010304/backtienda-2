import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
const app = express()
const port = process.env.PORT || 3001
app.use(cors({ origin: true }))
const mongoAtlasUrl = "mongodb+srv://seiya:juan3137749179@cluster0.zzl0r.mongodb.net/Guitar-Store?retryWrites=true&w=majority"

app.use(express.json())
app.use(userRoutes);

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoAtlasUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  catch (e) {
    console.log("Error de conexión a la DB")
  }
  console.log(`Example app listening at http://localhost:${port}`)
})