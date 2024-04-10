import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'
export const registerController = async(req,res) => {
 try {
  const {name,email,password,phone,address}=req.body;
  //validation 
  if(!name){
    return res.send({error:'Name must required'});
  }
  if(!email){
    return res.send({error:'email must required'});
  }
  if(!password){
    return res.send({error:'password must required'});
  }
  if(!phone){
    return res.send({error:'phone must required'});
  }
  if(!address){
    return res.send({error:'address must required'});
  }
  // check user 
const existingUser=await userModel.findOne({email})
//existing user 
if(existingUser){
  return res.status(200).send({
    success:true,
    message:"Already registerd plese login "
  })

 
}
const hashedPassword = await hashPassword(password)
//save 
const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

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
//text contoller 
export const testController=(req,res)=>{
  res.send(`protected routed `)
}