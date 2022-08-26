//Form Validation 

var myForm = document.querySelector("form");

var myInputs = document.querySelectorAll("input");

var mySub = document.getElementById("sub");

mySub.addEventListener("click", function () {
  console.log(myInputs)
  if (myInputs[0].value == "") {
    alert("Name must be filled out");
  }
  if (myInputs[2].value.length < 8) {
    alert("The password must be 8 characters at least");
  }

  if (!myInputs[1].value.match(/^\w{3}@\d{3}.com$/)) {
    alert("Email is not valid");
  }
});