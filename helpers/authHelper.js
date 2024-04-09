import bcrypt from 'bcrypt';

export const hashPassword=async(password)=>{
  try {
    const saltRound = 8 ;
    const hashedPassword=await bcrypt.hash(password,saltRound);
    return hashedPassword;
  } catch (error) {
    
  }
}
export const comparePassword=async(password,hashedPassword)=>{
return bcrypt.compare(password,hashedPassword);
}