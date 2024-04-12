import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";
export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { picture } = req.files;
    //validation start here
    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is required",
        });
      case !description:
        return res.status(500).send({
          error: "Description is required",
        });
      case !price:
        return res.status(500).send({
          error: "Price is required",
        });
      case !category:
        return res.status(500).send({
          error: "Category is required",
        });
      case !quantity:
        return res.status(500).send({
          error: "Quantity is required",
        });
        case !picture:
          return res.status(500).send({
            error: "Picture is required",
          });
        case picture.size > 1000000:
          return res.status(500).send({
            error: "Picture size should be less than 1 MB",
          });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (picture) {
      products.picture.data = fs.readFileSync(picture.path);
      products.picture.contentType = picture.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Creted Successfully ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while crreating Product list ",
      error,
    });
  }
};
// get all products

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-picture")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All products ",
      products,
      total_product: products.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in geting product",
      error,
    });
  }
};

//single product

export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-picture")
      .populate("category")
    res.status(200).send({
      success: true,
      message: "single product fetched ",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in geting single product",
      error,
    });
  }
};

//product photo 
export const productPictureController=async(req,res)=>{
  try {
    const product=await productModel.findById(req.params.pid).select("picture");
    if(product.picture.data){
      res.set("Content-type",product.picture.contentType);
      return res.status(200).send(product.picture.data);
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in geting product picture",
      error,
    });
  }
}


//delete product controller
export const deleteProductController=async(req,res)=>{
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-picture")
    res.status(200).send({
      success:true,
      message:"product deleted successfull "
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete product",
      error,
    });
  }
}
//update product router updateProductController

export const updateProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { picture } = req.files;
    //validation start here
    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is required",
        });
      case !description:
        return res.status(500).send({
          error: "Description is required",
        });
      case !price:
        return res.status(500).send({
          error: "Price is required",
        });
      case !category:
        return res.status(500).send({
          error: "Category is required",
        });
      case !quantity:
        return res.status(500).send({
          error: "Quantity is required",
        });
      case !picture && picture.size > 1000000:
        return res.status(500).send({
          error: "picture  is required and shoud be less than 1 mb ",
        });
    }
    const products = await productModel.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true})
    if (picture) {
      products.picture.data = fs.readFileSync(picture.path);
      products.picture.contentType = picture.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product updated  Successfully ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while crreating Product list ",
      error,
    });
  }
};