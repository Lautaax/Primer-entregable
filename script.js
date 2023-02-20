//Productos
let product = new ProductPrin();

product.getProduct() ;

product.getProduct("PRUEBA")
product.getProduct(1,"Anana", 10, "Es amarilla adentro", "Nohay","Sin foto" )
product.getProduct(2,"MANZANA","Nohay", 150,"Sin foto",)
product.getProduct(3,  "Sin foto")
product.getProduct(4,"Mandarina", 30 ,"Es naranja" , 10  ,"Sin foto")
product.getProduct(4,"Mandarina", 30 ,"Es naranja" , 10  ,"Sin foto")
product.getProduct(5,"Uva", 8 ,"Son bolitas" , 20  ,"Sin foto")
product.getProduct(6,"Papa", 3 ,"Es Puro Almidon" , 16  ,"Sin foto")
product.getProduct(7,"Banana", 15 ,"Es amarilla" , 10  ,"Sin foto")
product.getProduct() ;
product.getProduct(1,"Anana", 10, "Es amarilla adentro", "Nohay","Sin foto" )
product.getProduct() ;
product.getProductById(8);
product.getProductById(1);
product.getProductById(4);
product.getProductById(15);





class ProductPrin {
    constructor() {
        this.product = [];
    }
}

addProduct = (Id, Name, Stock, Descript, Precio, Foto) => {
    const productIndex = this.products.findIndex((product) => product.Id === Id)
    if (!Id || !Name || !Stock || !Descript || !Precio || !Foto ) {
        console.log("Error datos iguales")
        return;
    }
    if (productIndex === -1) {
        const product = {
            Id: this.product.lenght + 1,
            Name,
            Stock,
            Descript,
            Precio,
            Image,
        };
        this.product.push(product);
        console.log(`Su Producto ${Id} Fue agregado`)
    }
    else { console.log(`Producto con mismo  ${Id}`);
    }
}

getProduct = () => {
    console.log (this.product)
    return this.product
}

getProductById = (productId) => {
const productIdFound = this.product.findIndex((prod) =>prod.Id === productId)
if (productIdFound ===-1){
console.log(`Su producto ${Id} No se encuentra `)
} else {
    console.log(`Le suministramos los datos de su producto con ID ${Id}`);
    console.log(this.product[productIdFound]);
}
}
