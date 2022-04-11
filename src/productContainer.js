export default class Productos{
    constructor(){
        this.product = []
    }


getAllProducts = () =>{
    return this.product
}

saveProduct = (item) => {
    this.product.push(item)
}
}