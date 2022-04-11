import express from 'express'

const router = express.Router()

let cart = []

router.get('/:id/productos', (req,res)=>{
    //lista los productos en el carrito
})

router.post('/', (req,res)=>{
    //crea un carrito
})

router.delete('/:id', (req,res)=>{

})

export default router