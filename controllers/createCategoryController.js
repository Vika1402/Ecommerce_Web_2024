import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import userModel from "../models/userModel.js";
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "Name is required",
      });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: `Category Already Exisits`,
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).send({
      success: true,
      message: "new Category Creted",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category ",
    });
  }
};

//update category 

export const updateCategoryController=async (req,res)=>{
  try {const {name}=req.body
  const {id}=req.params
    const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{name:true})
    res.status(200).send({
      success:true,
      message:" Category Updated Successfully !",
      category
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      error,
      message:"Error while crated by category "
    })
  }
}

export const getCategoryController=async (req,res)=>{
  try {
    const category=await categoryModel.find({})
    res.status(200).send({
      success:true,
      message:"All categories list ",
      category
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      error,
      message:"Error while geting all category "
    })
  }
}

export const sigleCategoryController=async(req,res)=>{
try {
  const {slug}=req.params
  const category=await categoryModel.findOne({slug})
  res.status(200).send({
    success:true,
    message:"get single category successfully ",
    category

  })
} catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:"Error while get single Category",
    error
  })
}
}
//delete category 
export const deleteCategoryController=async(req,res)=>{
  try {
    const {id}=req.params
  await categoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:"Category delete Successfully ",
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error while deleteing Category",
      error
    })
    
  }
}


// Electronics
// Fashion and Apparel
// Home and Kitchen Appliances
// Health and Beauty
// Books and Media
// Toys and Games
// Sports and Fitness
// Furniture and Home Decor
// Grocery and Gourmet Food
// Automotive