function printHello() {
  const username = document.querySelector(`#username`).value;
  const password = document.querySelector(`#password`).value;

  const containerElement = document.createElement(`div`);
  const welcomeElement = document.createElement(`p`);
  const usernameElement = document.createElement(`p`);
  const passwordElement = document.createElement(`p`);
  //   const errorElement = document.getElementById(`error`);
  //   if (username.length !== 0, password.length !== 0){
  //     welcomeElement.innerText = "Welcome to our web site, you will enjoy it !";
  //   }

  //   if (username.length !== 0) {
  //     usernameElement.innerText = "Your username is " + username;
  //   } else {
  //     usernameElement.innerText = "Please fill in your username!! ";
  //     usernameElement.style.color = "red";
  //   }
  //   passwordElement.innerText = "Your password is " + password;
  //   if (password.length !== 0){
  //     passwordElement.innerText = "your password is" + password;

  //   } else {
  //     passwordElement.innerText = "Please fill in your password !! ";
  //     passwordElement.style.color = "red";
  //   }
  if (username.length !== 0 && password.length !== 0) {
    welcomeElement.innerText = "Welcome to our web site, you will enjoy it!";
   
  } else {
    welcomeElement.innerText = "Please enter both username and password.";
  }

  containerElement.appendChild(welcomeElement);
  containerElement.appendChild(usernameElement);
  containerElement.appendChild(passwordElement);
  document.body.appendChild(containerElement);
}

//   window.addEventListener(`submit`, (e) => {
//     let messeges = [];
//     if (name.value === "" || name.value == null) {
//       messeges.push(`Name is required `);
//     }
//     if (messeges.length > 0) {
//       e.preventDEfault();
//       errorElement.innerText = messeges.join(", ");
//     }
//   });
//   if (password.value.lenght <= 6) {
//     messeges.Push(`Password must be less than 6 characters`);
//   }
