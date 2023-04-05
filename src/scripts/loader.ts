import axios, { AxiosResponse } from "axios";


const btnLogin = document.querySelector(".btn-login") as HTMLButtonElement;
const formLogin = document?.querySelector(".form-login");
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

  console.log(informacion);
  axios
    .post("http://localhost:3002/api/login", informacion, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":"Content-Type",
        "Access-Control-Max-Age": "86400"
      },
      withCredentials: true,
    })
    .then((response) => {
      window.location.href = "http://localhost:3000/"

      // document.cookie = response.data?.cookie
      console.log(document.cookie)
      console.log(response);
    });


  // fetch("http://localhost:3002/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(informacion),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   }).catch(
  //     err => console.log(err)
  //   );
});

export {};
