import mongoose from "mongoose";
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products })
    }
    catch (error) {
        console.log(" ⛔ Error in fetching products", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}


export const createProduct = async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all the details..." })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    }
    catch (error) {
        console.log(" ⛔ Error in new Product creation", error.message)
        res.status(500).json({ success: false, message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product id" })
    }

    try {
        const updated_product = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updated_product })
    } catch (error) {
        console.log(" ⛔ Error in product update...")
        res.status(500).json({ success: false, message: "Server error" })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product id" })
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    }
    catch (error) {
        console.log(" ⛔ Error in fetching product", error.message)
        res.status(500).json({ success: false, message: "Server Error" });
    }
}