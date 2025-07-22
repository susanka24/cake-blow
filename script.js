window.addEventListener('DOMContentLoaded', () => {
  const cake = document.getElementById('cake');
  cake.innerHTML = "";  // vyčistit

  const candleCount = 23;  // tvůj pevný počet

  for (let i = 0; i < candleCount; i++) {
    const candle = document.createElement("div");
    candle.className = "candle";
    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);
    cake.appendChild(candle);

    flame.addEventListener("click", () => {
      flame.classList.add("out");
      setTimeout(() => flame.classList.remove("out"), 3000);
    });
  }
});
