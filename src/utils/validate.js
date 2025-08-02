
export const checkValidData = (email, password) => {
   
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)return "Invalid Password: Must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character.";
 
  return null;
};
