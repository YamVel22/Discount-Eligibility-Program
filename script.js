//Retrieve the values from the age input field and the membership checkbox.
function checkEligibility() {
  let age = document.getElementById("age").value;
  let legend = document.getElementById("legend").checked;
  let premium = document.getElementById("premium").checked;
  let junior = document.getElementById("junior").checked;

  //Use conditional statements to check if the user is eligible for a discount based on criteria:
  let answer = "";
  if (age >= 65) {
    answer = "Congratulations! You are eligible for the Senior Discount.";
  } else if (age <= 18 && (legend || premium || junior)) {
    answer = "Congratulations! You are eligible for the Member Discount.";
  } else {
    answer = "You are not eligible for a discount";
  }

  document.getElementById("answer").innerHTML = answer;
}
