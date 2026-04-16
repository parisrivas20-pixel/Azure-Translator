const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");

// Character counter
inputText.addEventListener("input", () => {
  charCount.textContent = inputText.value.length + " characters";
});

// Translate function
async function translateText() {
  const key = document.getElementById("key").value;
  const endpoint = document.getElementById("endpoint").value;
  const location = document.getElementById("location").value;
  const text = inputText.value;
  const targetLang = document.getElementById("targetLang").value;

  const url = `${endpoint}/translate?api-version=3.0&to=${targetLang}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": location,
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{ Text: text }])
    });

    const data = await response.json();
    document.getElementById("outputText").value =
      data[0].translations[0].text;

  } catch (error) {
    alert("Error: " + error.message);
  }
}

// Copy button
function copyText() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("Copied!");
}

// Swap button (basic UI)
document.getElementById("swapBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText");
  const output = document.getElementById("outputText");

  const temp = input.value;
  input.value = output.value;
  output.value = temp;
});