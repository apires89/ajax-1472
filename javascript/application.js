console.log("Hello from JavaScript!");
import Swal from 'sweetalert2';

const signUp = (event) => {
  // prevent the default behavior
  event.preventDefault();
  // 2. Save the information that is in the form
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  // 4. fetch the url to post info to the api
    //4.1 - Create the fetch options
    const requestDetails = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"email": emailValue, "password": passwordValue})
    }
    //4.2 actual sending of the fetch request with the options
    fetch("https://reqres.in/api/register", requestDetails)
      .then(response => {
        console.log(response.status)
        if (response.status === 200) {
          Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
        } else {
          Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
        }
      })
}
// 1. select the form and other variables we might need // document.queryselectors
const form = document.getElementById("form");
// 3. Add an event listener for the submit
form.addEventListener("submit",signUp)

// 5. profit


