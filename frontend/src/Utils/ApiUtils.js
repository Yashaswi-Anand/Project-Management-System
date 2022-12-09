import axios from "axios";
const api_url = "http://localhost:5000";


export const signup = async (signUpData) => {
  console.log(signUpData);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/signup`,
      data: signUpData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const login = async (signInData) => {
  console.log(signInData);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/login`,
      data: signInData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}; 


