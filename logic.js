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

  // Show the output paragraph and read/stop buttons
  document.getElementById("output").style.display = "block";
  document.getElementById("voiceSelect").style.display = "block";
  document.getElementById("readButton").style.display = "block";
  document.getElementById("stopButton").style.display = "block";
}

function populateVoiceList() {
  let voices = window.speechSynthesis.getVoices();
  let voiceSelect = document.getElementById("voiceSelect");

  voices.forEach((voice, index) => {
    let option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = index;
    voiceSelect.appendChild(option);
  });
}

function readText() {
  let text = document.getElementById("output").innerText;
  let speech = new SpeechSynthesisUtterance(text);
  let voices = window.speechSynthesis.getVoices();
  let selectedVoiceIndex = document.getElementById("voiceSelect").value;

  if (selectedVoiceIndex) {
    speech.voice = voices[selectedVoiceIndex];
  }

  window.speechSynthesis.speak(speech);
}

function stopText() {
  window.speechSynthesis.cancel();
}

// Ensure voices are loaded before using them
window.speechSynthesis.onvoiceschanged = populateVoiceList;
