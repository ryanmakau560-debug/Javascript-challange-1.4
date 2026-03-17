// Function to calculate age in months
function calculateMonths(age) {
  return age * 12;
}

// Function to display everything
function displayData(name, age) {

  // Greeting (template literal)
  document.getElementById("greeting").textContent =
    `Hello, ${name}! 👋`;

  // Age in months
  document.getElementById("ageMonths").textContent =
    `You are ${calculateMonths(age)} months old.`;

  // If...else condition
  if (age >= 18) {
    document.getElementById("adultMessage").textContent =
      "✅ You can access adult content.";
  } else {
    document.getElementById("adultMessage").textContent =
      "❌ You are too young for adult content.";
  }

  // Loop (5 times motivational quote)
  const quoteContainer = document.getElementById("quotes");
  quoteContainer.innerHTML = ""; // clear first

  for (let i = 0; i < 5; i++) {
    const quote = document.createElement("p");
    quote.classList.add("quote");
    quote.textContent = "💪 Stay consistent and never give up!";
    quoteContainer.appendChild(quote);
  }
}

// FORM SUBMIT
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  // Save to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  displayData(name, age);
});

// LOAD DATA FROM localStorage WHEN PAGE OPENS
window.onload = function () {
  const savedName = localStorage.getItem("name");
  const savedAge = localStorage.getItem("age");

  if (savedName && savedAge) {
    displayData(savedName, parseInt(savedAge));
  }
};