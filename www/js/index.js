document.getElementById("vibration").addEventListener("click", vibration);
document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);
function vibration() {
alert("hi");
   var time = 3000;
   navigator.vibrate(time);
}

function vibrationPattern() {
    alert("hii");
   var pattern = [1000, 1000, 1000, 1000];
   navigator.vibrate(pattern);
    // Vibrate for 1 second
// Wait for 1 second
// Vibrate for 3 seconds
// Wait for 1 second
// Vibrate for 5 seconds
//navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
}