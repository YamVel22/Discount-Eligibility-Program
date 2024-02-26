//Retrieve the values from the age input field and the membership checkbox.
function checkEligibility() {
  let age = document.getElementById("#age").value;
  let legend = document.getElementById("#legend");
  let premium = document.getElementById("#premium");
  let junior = document.getElementById("#junior");
  let result = document.getElementById("div.result");

  //Use conditional statements to check if the user is eligible for a discount based on criteria:
  if (age >= 65) {
    result.textContent =
      "Congratulations! You are eligible for the Senior Discount.";
  } else if (
    age <= 18 &&
    (legend.checked || premium.checked || junior.checked)
  ) {
    result.textContent =
      "Congratulations! You are eligible for the Member Discount.";
  } else {
    result.textContent = "You are not eligible for a discount";
  }
}
//Display the result in the output field or element.
