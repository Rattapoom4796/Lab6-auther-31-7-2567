const express = require("express")
const Product = require("../models/product")

exports.getProducts = async(req,res) =>{
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getProduct = async (req, res) => {
    try{
        const {id}=req.params;
        const product =await Product.findById(id);
        if(!product) return res.status(404).json({message:"Product not found"});
        res.json(product);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};