import axios from "axios";
import qs from 'qs';

const API_URL = 'http://127.0.0.1:8000/account/api/login';

class AuthService {
  async login(email, password) {
    let jwt_token;
    const data = qs.stringify({email, password});
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        };
    const response = await axios.post(
        API_URL,
        data,
        headers
    ).catch(error => {
        console.log(error.response)
    });;
    
    if (typeof(response) !== 'undefined') {
        jwt_token= response.data.Token
        localStorage.setItem("user", JSON.stringify(response.data));
      }

    return jwt_token;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
      const a = JSON.parse(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
