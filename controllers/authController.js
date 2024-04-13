import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'
export const registerController = async(req,res) => {
 try {
  const {name,email,password,phone,address,answer}=req.body;
  //validation 
  if(!name){
    return res.send({message:'Name must required'});
  }
  if(!email){
    return res.send({message:'email must required'});
  }
  if(!password){
    return res.send({message:'password must required'});
  }
  if(!phone){
    return res.send({message:'phone must required'});
  }
  if(!address){
    return res.send({message:'address must required'});
  }
  if(!answer){
    return res.send({message:'answer must required'});
  }
  // check user 
const existingUser=await userModel.findOne({email})
//existing user 
if(existingUser){
  return res.status(200).send({
    success:false,
    message:"Already registerd plese login "
  })

 
}
const hashedPassword = await hashPassword(password)
//save 
const user = await new userModel({name,email,phone,address,password:hashedPassword,answer}).save()

res.status(200).send({
  success:true,
  message:"user register successfully ",
  user
})
 } catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:'Error in Registration ',
    error
  })
  
 }
}


// post login controller

export const loginController= async (req,res)=>{
try {
  const {email,password} =req.body;
  //validation 
  if(!email || !password){
    return res.status(404).send({
      success:false,
      message:"Invalid email or password "
    })
  }
  //check user
  const user=await userModel.findOne({email})
  if(!user){
    return res.status(404).send({
      success:false,
      message:'Email is not registerd '
    })
  }
  const match=await comparePassword(password,user.password)
  if(!match){
    return res.status(200).send({
      success:false,
      message:"Invalid Password"
    })
  }
  const token =JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.status(200).send({
    success:true,
    message:'Login successfully ! ',
    user:{
      name:user.name,
      email:user.email,
      phone:user.phone,
      address:user.address,
      role:user.role
    },
    token,
  })
} catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:'Error in Login right now ',
    error
  })
}
}
//forgot password controller 

export const  forgotPasswordController = async(req,res)=>{

  try {
    const {email,answer,newPassword}=req.body
    if(!email){
      res.status(400).send({message:"Email is required ! "})
    }
    if(!answer){
      res.status(400).send({message:"Answer is required ! "})
    }
    if(!newPassword){
      res.status(400).send({message:"New PAssword  is required ! "})
    }
    // check email and answer 

    const user =await userModel.findOne({email,answer})
    //VAlidation 
    if(!user){
      res.status(400).send({
        success:false,
        message:"Wrong Email or Password "
      })
    }
    const hashed=await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
      success:true,
      message:"password Reset Successfully !"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Somethoing went wrong ',
      error
    })
  }

}








//text contoller 
export const testController=(req,res)=>{
  try {
    res.send(`protected routed `)
  } catch (error) {
    res.send({error})
  }
 
}




//profile controller


export const updateProfileController=async(req,res)=>{
try {
  const {name,email,password,address,phone}=req.body;
  const user=await userModel.findById(req.user._id)
  if(password && password.length <6){
    return res.json({error:`password is require and 6 charcater long` })
  }
  const hashedPassword=password ? await hashPassword(password):undefined
  const updatedUser=await userModel.findByIdAndUpdate(req.user._id,{
    name:name || user.name,
    password:password ||user.password,
    phone:phone || user.phone,
    address:address || user.address,


  },{new:true})
  res.status(200).send({
    success:true,
    message:'Profile Updated Successfully ',
    updatedUser
  })
  
} catch (error) {
  console.log(error);
    res.status(400).send({
      success:false,
      message:'Somethoing went wrong update profile  ',
      error
    })
}
}