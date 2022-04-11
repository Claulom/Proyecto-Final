import express from 'express'
import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
 import __dirname from './utils.js' 


const app = express()
const PORT = (8080) 
const server = app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))
app.use(express.json())
/* app.use(express.static(__dirname+'/files'))  */


app.use('/products', productsRouter)
app.use('/cart', cartRouter)