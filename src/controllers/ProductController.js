import Product from "../models/ProductModel.js"

const registerProduct = async (productData) => {
    try {
        const {sku, name, stock, category} = productData;
        console.log(productData)

        let product = await Product.findOne({sku}) || null;
        if (product !== null){
            return{
                success: false,
                msg: "el producto ya existe"
            }
        }

        if(sku == ""){
            return {status: "El código de referencia no puede estar vacío"}
        } else if(name == ""){
            return {status: "El nombre no puede estar vacío"}
        } else if(stock == ""){
            return {status: "El stock no puede estar vacío"}
        } else if(category == ""){
            return {status: "La categoria no puede estar vacío"}
        } else{
            product = new Product({
                sku: sku, 
                name: name,
                stock: stock, 
                category: category
            });
            await product.save();
            return { status: "registered" }
        }
  
    } catch (error) {
        return {
            success: false,
            msg: "Error al registrar producto"
        };
    }
}

const getProducts = async () => {
    const products = await Product.find({});
    return products;
}
 
const updateProducts = async (productData) => {
    try {
        const {sku, name, stock, category} = productData;
        console.log(productData)

        let product = await Product.findOne({sku}) || null;
        if (product == null){
            return {
                success: false,
                msg: "el producto no existe"
            }
    
        }else{
            const filter = { sku: sku };
            const update = { stock : stock, category: category };
            
            let product = await Product.findOneAndUpdate(filter, update);
            product.sku; 
            product.stock; 
            product.category;
        }
        return { status: "actualizado" }
    
    } catch (error) {
        return {
            success: false,
            msg: "Error al actualizar producto"
        };
    }
}

const deleteProducts = async (productData) => {
    try {
        const {sku, name, stock, category} = productData;
        console.log(productData)

        let product = await Product.findOne({sku}) || null;
        if (product == null){
            return {
                success: false,
                msg: "el producto no existe"
            }
    
        }else{
            await Product.findOneAndDelete({sku: sku});
        }
        return { status: "eliminado" }
    
    } catch (error) {
        return {
            success: false,
            msg: "Error al eliminar producto"
        };
    }
}

const productController = {
    registerProduct,
    getProducts,
    updateProducts,
    deleteProducts
}
export default productController;