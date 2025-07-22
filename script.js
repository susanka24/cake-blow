// 💡 Přidání svíček z URL parametru (např. ?candles=23)
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const candleCount = parseInt(urlParams.get('candles'));

  if (!isNaN(candleCount) && candleCount > 0 && candleCount <= 100) {
    const input = document.getElementById('number');
    const form = document.querySelector('form');

    if (input && form) {
      input.value = candleCount;
      form.dispatchEvent(new Event('submit')); // „kliknutí“ na tlačítko
    }
  }
});

function addCandles(e) {
  e.preventDefault();
  const number = parseInt(document.getElementById("number").value);
  const cake = document.getElementById("cake");
  cake.innerHTML = "";

  if (isNaN(number) || number <= 0 || number > 100) {
    alert("Please enter a valid number of candles (1-100).");
    return;
  }

  for (let i = 0; i < number; i++) {
    const candle = document.createElement("div");
    candle.className = "candle";
    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);
    cake.appendChild(candle);
  }

  const flames = document.querySelectorAll(".flame");
  flames.forEach((flame) => {
    flame.addEventListener("click", () => {
      flame.classList.add("out");
      setTimeout(() => {
        flame.classList.remove("out");
      }, 3000);
    });
  });
}

document.querySelector("form").addEventListener("submit", addCandles);
