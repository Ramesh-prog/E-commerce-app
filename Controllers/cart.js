import { Cart } from "../Models/Cart.js";

export const addToCart = async (req,res) => {
    const {productId, title, price, qty, imgSrc} = req.body
    const userId = "66966f66149990d101d57379";

    let cart = new Cart({userId,items:[]})
    cart.items.push({productId, title, price, qty, imgSrc});

    await cart.save();
    res.json({message: 'items added to cart', cart})
}