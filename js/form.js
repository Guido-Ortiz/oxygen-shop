const url = 'https://jsonplaceholder.typicode.com/guide/'
var form = document.getElementById("form");
var name = document.getElementById("name").value
var email = document.getElementById("email").value
console.log(name, email)

document.getElementById("btn-id").addEventListener("click", async function (e) {
//   form.submit();
e.preventDefault()
  try{
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({name, email
        //   Name: name ? name : null,
        //   Email:email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await result.json();
  }
  catch (e) {
    console.log(e)
  }

});



// const form = document.getElementById('form');
// const nameForm = document.getElementById('name')
// const emailForm = document.getElementById('email')
// const checkbox = document.getElementById('checkbox')
// const errorName = document.querySelector('.error_message_name');
// const errorEmail = document.querySelector('.error_message_email');
// const policy = document.querySelector('.policy_label')

// const validateName = () => {
//   const regexName = /[a-zA-Z]{2,100}/
//   if (regexName.test(nameForm.value)) {
//     errorName.style.visibility = "hidden";
//     nameForm.classList.remove('error')
//     nameForm.classList.add("correct")
//   } else {
//     errorName.style.visibility = "visible";
//     nameForm.classList.remove('error')
//     nameForm.classList.add("correct")
//   }
// }
// const validateEmail = () => {
//   const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//   if (regexMail.test(emailForm.value)) {
//     errorEmail.style.visibility = "hidden";
//     emailForm.classList.remove('error')
//     emailForm.classList.add("correct")
//   } else {
//     errorEmail.style.visibility = "visible";
//     emailForm.classList.remove('error')
//     emailForm.classList.add("correct")
//   }
// }
// nameForm.addEventListener('input', validateName)
// emailForm.addEventListener('input', validateEmail)

// // async function sendForm(email, name,url) {
// //   await fetch(url, {
// //       method: "POST",
// //       body: JSON.stringify({
// //           email: email,
// //           name: name,
// //       }),
// //       headers: {
// //           'Content-type': 'application/json'
// //       },
// //   })
// //       .then((response) => response.json())
// //       .then((data)=> console.log(data))
// // }

// // form.addEventListener('submit', (e)=>{
// //   e.preventDefault();
// //   if(checkbox.checked){
// //       policy.classList.remove('not_checked');
// //       (nameForm.value&&emailForm.value)? sendForm(URL_FORM,nameForm.value,emailForm.value) : alert('complete all fields')
// //   }else policy.classList.add("not_checked")

// // })

// document.getElementById("btn-id").addEventListener("click", async function (e) {
//   //   form.submit();
//   e.preventDefault()
//   try {
//     const result = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         name, email
//         //   Name: name ? name : null,
//         //   Email:email,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//     const data = await result.json();
//   }
//   catch (e) {
//     console.log(e)
//   }

// });