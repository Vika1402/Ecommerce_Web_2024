import { hashPassword } from "../helpers/authHelper";
import userModel from "../models/userModel";
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
const hashedPassword=await hashPassword(password)
//save 
const user =new userModel({name,email,phone,address,password:hashPassword}).save()

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
