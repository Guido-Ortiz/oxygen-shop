const url = 'https://jsonplaceholder.typicode.com/guide/'
var form = document.getElementById("form");
var name = document.getElementById("name").value
var email = document.getElementById("email").value
console.log(name, email)

document.getElementById("btn-id").addEventListener("click", async function () {
//   form.submit();
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
      console.log(data)
      alert('form sent!')
  }
  catch (e) {
    console.log(e)
  }

});