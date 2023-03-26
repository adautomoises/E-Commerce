import Axios from "axios";

const defaultInterceptor = {
  response: async (config: any) => {
    const token = localStorage.getItem("@e-commerce:token");

    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("@e-commerce:token")}`;
    }

    return config;
  },

  error: (error: any) => {
    return Promise.reject(error);
  },
};

export const api = Axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  defaultInterceptor.response,
  defaultInterceptor.error
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const error401 = error.response?.status;

    if (error401 === 401) {
      localStorage.removeItem("id");
      localStorage.removeItem("@e-commerce:token");

      alert("Sessão Expirada! Por favor, faça login novamente.");
      window.location.href = "/entrar";
    }
    return Promise.reject(error);
  }
);