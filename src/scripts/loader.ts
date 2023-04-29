import axios, { AxiosResponse } from "axios";

const btnLogin = document.querySelector(".btn-login") as HTMLButtonElement;
const btnSign = document.querySelector(".btn-sign") as HTMLButtonElement;
const formLogin = document?.querySelector(".form-login");
const logOut = document.querySelector(".log-out-link") as HTMLLinkElement;

window.addEventListener("load", (event) => {
  const content = document.querySelector(".container_loader") as HTMLDivElement;
  content.style.opacity = "0";
  content.style.visibility = "hidden";
});

formLogin?.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnLogin?.addEventListener("click", () => {
  const email = document.querySelector(".email") as HTMLInputElement;
  const password = document.querySelector(".password") as HTMLInputElement;
  const informacion = {
    email: email.value,
    password: password.value,
  };

  axios
    .post("http://localhost:3002/api/login", informacion, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
      withCredentials: true,
    })
    .then((response) => {
      window.location.href = "http://localhost:3000/";
    });
});

btnSign?.addEventListener("click", () => {
  const email = document.querySelector(".email") as HTMLInputElement;
  const password = document.querySelector(".password") as HTMLInputElement;
  const nombre = document.querySelector(".nombre") as HTMLInputElement;
  const apellido = document.querySelector(".apellido") as HTMLInputElement;
  const informacion = {
    email: email.value,
    password: password.value,
    nombre: nombre.value,
    apellido: apellido.value,
  };

  axios
    .post("http://localhost:3002/api/signIn", informacion, {
      headers: {
        "access-control-allow-origin": "http://localhost:3000",
        "content-type": "application/json",
        "access-control-allow-methods":
          "get, post, put, patch, post, delete, options",
        "access-control-allow-headers": "content-type",
        "access-control-max-age": "86400",
      },
      withCredentials: true,
    })
    .then((response) => {
      window.location.href = "http://localhost:3000/";
    });
});

logOut?.addEventListener("click", (event) => {
  event.preventDefault();
  axios.post(
    "http://localhost:3002/api/logout",
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
      withCredentials: true,
    }
  ).then( response => {
    window.location = response.data.url
  })
});

export {};
