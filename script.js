let container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");

  
  newDiv.style.backgroundColor = "rgb(29, 29, 29)";

  newDiv.addEventListener("mouseover", function () {
    newDiv.style.backgroundColor = "green";
  });

  newDiv.addEventListener("mouseout", function () {
    newDiv.style.backgroundColor = "rgb(29, 29, 29)";
  });

  container.appendChild(newDiv);
}
