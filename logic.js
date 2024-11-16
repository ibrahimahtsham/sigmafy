function changeText() {
  let action = document.getElementById("action").value;
  let object = document.getElementById("object").value;
  let originalText = document.getElementById("output").innerHTML;
  let newText = originalText
    .replace(/{action}/g, action)
    .replace(/{object}/g, object);
  document.getElementById("output").innerHTML = newText;

  // Hide the title, inputs, and button
  document.getElementById("title").style.display = "none";
  document.getElementById("action").style.display = "none";
  document.getElementById("object").style.display = "none";
  document.getElementById("generateButton").style.display = "none";

  // Show the output paragraph
  document.getElementById("output").style.display = "block";
}
