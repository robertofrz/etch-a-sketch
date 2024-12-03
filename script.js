let container = document.querySelector("#container");
let color = document.querySelector("#color");
let clear = document.querySelector("#clear");

let numSquare = prompt(
  "Choose the number of squares per side for your grid. (Max 100 squares)"
);
numSquare = Number(numSquare);

// CHECHINK IF THE USER INPUT IS VALID
if (isNaN(numSquare) || numSquare <= 0 || numSquare > 100) {
  alert("Please enter a number between 1 and 100.");
  location.reload();
} else {
  // CREATING THE SQUARES
  for (let j = 0; j < numSquare; j++) {
    for (let i = 0; i < numSquare; i++) {
      const div = document.createElement("div");
      div.classList.add = "square";
      div.style.width = `${600 / numSquare}px`;
      div.style.height = `${400 / numSquare}px`;
      div.style.margin = "0";
      div.style.padding = "0";
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
      });
      container.appendChild(div);

      // SETTING THE CLEAR BUTTON
      clear.addEventListener("click", () => {
        div.style.backgroundColor = "#bbbbbb";
      });

      // SETTING THE COLOR/BLACK BUTTON
      let isFirstClick = true;
      color.addEventListener("click", () => {
        if (isFirstClick) {
          div.style.backgroundColor = "#bbbbbb";
          color.textContent = "BLACK";
          div.addEventListener("mouseenter", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          });
          isFirstClick = false;
        } else {
          div.style.backgroundColor = "#bbbbbb";
          color.textContent = "COLOR";
          div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
          });
          isFirstClick = true;
        }
      });
    }
  }
}
