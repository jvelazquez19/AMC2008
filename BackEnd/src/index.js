import app from './app.js'
import { connectDB } from './db.js'



app.listen(4001); // Cambia el puerto a 4001
console.log('Server Conectado', 4001);
connectDB()