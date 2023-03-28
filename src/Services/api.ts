import Axios from "axios";

const defaultInterceptor = {
  response: async (config: any) => {
    const token = localStorage.getItem("@e-commerce:token");

    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "@e-commerce:token"
      )}`;
    }

    return config;
  },

  error: (error: any) => {
    return Promise.reject(error);
  },
};

export const api = Axios.create({
  baseURL: "https://e-commerce-382004.rj.r.appspot.com",
});

api.interceptors.request.use(
  defaultInterceptor.response,
  defaultInterceptor.error
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (errors) => {
    const error = errors.response?.status;
    
    if (error === 401) {
      localStorage.removeItem("@e-commerce:token");

      alert("Sessão Expirada! Por favor, faça login novamente.");
      window.location.href = "/entrar";
    } else if (error === 403) {
      localStorage.removeItem("@e-commerce:token");

      alert("Não autorizado! Por favor, faça login novamente.");
      window.location.href = "/login";
    }
    return Promise.reject(errors);
  }
);
