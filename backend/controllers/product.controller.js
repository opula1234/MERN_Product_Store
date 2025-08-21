import mongoose from "mongoose";
import Product from "../models/product.model.js"

export const getProducts = async (res, req) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
    }
    catch (error){
        console.log("❌ Error in fetching products", error.message)
        res.status(500).json({ success: false, message: "❌ Server Error"})
    }
}


export const createProduct = async (res, req) => {
    try{
        const product = req.body

        if (!prod)
    }
    catch (error) {

    }
}