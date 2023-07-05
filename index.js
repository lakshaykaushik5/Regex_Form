// let formData = document.querySelector(".form");
// let submintButton = document.querySelector(".button");
// let errormessages = document.querySelectorAll(".error-message");
// let emptyfmessages = document.querySelectorAll(".empty-field");
// let showpwd = document.querySelector(".btn");
// let firstName, lastName, email, password;
// let fntarget, lntarget, etarget, pwdtarget;
// let feild;

// for (let message of errormessages) {
//   message.classList.add("d-none");
// }

// for (let em of emptyfmessages) {
//   em.classList.add("d-none");
// }

// let nameRegex = /^[a-z]+$/i;
// let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// formData.addEventListener("keyup", (event) => {
//   event.preventDefault();
//   console.log(event.target);
//   feild = event.target.dataset.key;
//   if (feild == "firstName") {
//     firstName = event.target.value;
//     fntarget = event.target;
//   } else if (feild == "lastName") {
//     lastName = event.target.value;
//     lntarget = event.target;
//   } else if (feild == "email") {
//     email = event.target.value;
//     etarget = event.target;
//   } else if (feild == "password") {
//     password = event.target.value;
//     pwdtarget = event.target;
//   }
// });

// submintButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (firstName) {
//     emptyfmessages[0].classList.remove("d-none");
//     if (!nameRegex.test(firstName)) {
//       fntarget.classList.add("error");
//       errormessages[0].classList.remove("d-none");
//     } else {
//       fntarget.classList.remove("error");
//       errormessages[0].classList.add("d-none");
//     }
//   } else {
//     emptyfmessages[0].classList.remove("d-none");
//   }
//   if (lastName) {
//     emptyfmessages[1].classList.remove("d-none");
//     if (!nameRegex.test(lastName)) {
//       lntarget.classList.add("error");
//       errormessages[1].classList.remove("d-none");
//     } else {
//       lntarget.classList.remove("error");
//       errormessages[1].classList.add("d-none");
//     }
//   } else {
//     emptyfmessages[1].classList.remove("d-none");
//   }
//   if (email) {
//     emptyfmessages[2].classList.remove("d-none");
//     if (!emailRegex.test(email)) {
//       etarget.classList.add("error");
//       errormessages[2].classList.remove("d-none");
//     } else {
//       etarget.classList.remove("error");
//       errormessages[2].classList.add("d-none");
//     }
//   } else {
//     emptyfmessages[2].classList.remove("d-none");
//   }
//   if (password) {
//     emptyfmessages[3].classList.remove("d-none");
//     if (!passwordRegex.test(password)) {
//       pwdtarget.classList.add("error");
//       errormessages[3].classList.remove("d-none");
//     } else {
//       pwdtarget.classList.remove("error");
//       errormessages[3].classList.add("d-none");
//     }
//   } else {
//     emptyfmessages[3].classList.remove("d-none");
//   }
// });

// showpwd.addEventListener("click", (event)=>{
//   event.preventDefault();
//   if(pwdtarget.getAttribute("type") === "text"){
//     pwdtarget.setAttribute("type","password");
//   }
//   else{
//     pwdtarget.setAttribute("type","text");
//   }
// })


localStorage.clear();
let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let fnFlag, lnFlag, eFlag, pFlag;
let firstname, lastname, email, password;
let fnTarget, lnTarget, eTarget, pTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let message of emptyFieldMessage) {
  message.classList.add("d-none");
}

formData.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch (field) {
    case "firstName":
      firstname = e.target.value;
      fnTarget = e.target;
      break;
    case "lastName":
      lastname = e.target.value;
      lnTarget = e.target;
      break;
    case "email":
      email = e.target.value;
      eTarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pTarget = e.target;
      break;
    default:
      firstname = lastname = email = password = "";
      break;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(fnTarget, lnTarget, eTarget, pTarget);
  if (firstname) {
    emptyFieldMessage[0].classList.add("d-none");
    if (!nameRegex.test(firstname)) {
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      fnFlag = false;
    } else {
      errorMessages[0].classList.add("d-none");
      fnTarget.classList.remove("error");
      fnFlag = true;
    }
  } else {
    emptyFieldMessage[0].classList.remove("d-none");
  }
  if (lastname) {
    emptyFieldMessage[1].classList.add("d-none");
    if (!nameRegex.test(lastname)) {
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
      lnFlag = false;
    } else {
      errorMessages[1].classList.add("d-none");
      lnTarget.classList.remove("error");
      lnFlag = true;
    }
  } else {
    emptyFieldMessage[1].classList.remove("d-none");
  }
  if (email) {
    emptyFieldMessage[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      eTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
      eFlag = false;
    } else {
      errorMessages[2].classList.add("d-none");
      eTarget.classList.remove("error");
      eFlag = true;
    }
  } else {
    emptyFieldMessage[2].classList.remove("d-none");
  }
  if (password) {
    emptyFieldMessage[3].classList.add("d-none");
    if (!pwdRegex.test(password)) {
      pTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
      pFlag = false;
    } else {
      errorMessages[3].classList.add("d-none");
      pTarget.classList.remove("error");
      pFlag = true;
    }
  } else {
    emptyFieldMessage[3].classList.remove("d-none");
  }
  if (fnFlag && lnFlag && eFlag && pFlag) {
    fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
    window.location.href = "success.html";
  }
});

showPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pTarget.getAttribute("type") === "text") {
    pTarget.setAttribute("type", "password");
  } else {
    pTarget.setAttribute("type", "text");
  }
});