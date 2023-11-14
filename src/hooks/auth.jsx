import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";


export const AuthContext = createContext({});


function AuthProvider({ children }) {

  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      const { password: tryPassword, ...userData } = user;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userData));
      localStorage.setItem("@rocketmovies:token", token);

      //adicionando o token no cabeçalho de authenticação.
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      else {
        alert("Não foi possível efetuar o login.");
      }
    }


  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:token");
    localStorage.removeItem("@rocketmovies:user");

    setData({});

  }

  async function updateProfile({ user, avatarFile }) {

    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      const { password, old_password, ...userData } = user;

      await api.put("/users/update", user);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userData));

      setData({ userData, token: data.token });

      alert("perfil atualizado!");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível alterar os dados do perfil!");
      }
    }
  }


  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");


    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, [])



  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth };