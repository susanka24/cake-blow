function addCandles(e) {
  if (e) e.preventDefault();

  const number = parseInt(document.getElementById("number").value);
  const cake = document.getElementById("cake");
  cake.innerHTML = "";

  if (isNaN(number) || number <= 0 || number > 100) {
    alert("Please enter a valid number of candles (1–100).");
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

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = document.getElementById('number');

  form.addEventListener('submit', addCandles);

  const urlParams = new URLSearchParams(window.location.search);
  const candleCount = parseInt(urlParams.get('candles'));

  if (!isNaN(candleCount) && candleCount > 0 && candleCount <= 100) {
    input.value = candleCount;
    addCandles(); // ručně spustíme vytvoření dortu
  }
});
