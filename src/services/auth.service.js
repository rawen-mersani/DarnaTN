import axios from "axios";

const API_URL = "http://localhost:9094/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username,nom,prenom, email,password,fonction,dateNaissance) {
    return axios.post(API_URL + "signup", {
      username,
      nom,
      prenom,
      email,
      password,
      fonction,
      dateNaissance
        });
  }
}

export default new AuthService();
