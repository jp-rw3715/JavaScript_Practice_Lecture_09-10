function updateClock() {
  const now = new Date();

  // Greeting based on hour
  const hour = now.getHours();
  let greet;
  if (hour < 12) {
    greet = "Good Morning!";
  } else if (hour < 18) {
    greet = "Good Afternoon!";
  } else {
    greet = "Good Evening!";
  }
  document.getElementById("greeting").textContent = greet;

  // Format date as "Weekday, Month Day, Year"
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = fullDate;

  // Format time as HH:MM:SS AM/PM
  let hours = hour % 12 || 12; // 12-hour format
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";
  const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("time").textContent = timeStr;
}

// Update every second forever
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
