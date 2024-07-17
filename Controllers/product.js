import { Product } from "../Models/Product.js";

// add product
export const addProduct = async (req,res) =>{
    const {title, description, price, category, qty, imgSrc} = req.body
    try {
        let product = await Product.create({
            title,
            description,
            price,
            category,
            qty,
            imgSrc,
        });
        res.json({message:'product added successfully....!!', product})
    } catch (error) {
        res.json(error.message)
    }
}

// get products 

export const getProducts = async (req,res) => {
    let products = await Product.find().sort({createdAt: -1})
    res.json({message: 'All products', products})
}


// get specific product by ID 

export const getProductById = async (req,res) => {
    const id = req.params.id;
    let product = await Product.findById(id)
    if(!product) return res.json({message:'invalid id'})
    res.json({message : 'specific Product', product})
}