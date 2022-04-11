import fs from 'fs'

const productos = [];

export default class Files {
    constructor(nombre){
        this.nombre = nombre;
    }


async leer(){
    try{
        let content = await fs.promises.readFile(this.nombre, 'utf-8')
        if(content) return console.log(content)
    }catch(err){
        console.error([])
    }
}

async guardar(producto){
    try{
        productos.push(producto)
        await fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, '\t'))
    }catch(err){
        console.error("Can`t save file: " + err)
    }

}
async borrar(){
    try{
        await fs.promises.unlink(this.nombre, (err)=>{
            if(err) return console.log('Error delete file: ' + err)
        })
    }catch(err){
        console.error("Error delete file: " + err)
    }
}
}
