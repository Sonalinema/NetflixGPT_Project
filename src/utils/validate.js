export const checkValidateData =(email,password)=>{
    const isEmailValid=/^ [a-zA-Z0-9._%+-]+@ [a-zA-Z0-9.-]+. [a-zA-Z] {2,}$/.test(email);
    const isPasswardValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Email Id is not valid"
    if(!isPasswardValid) return "Password is not valid"

    return null; // else is not required
}