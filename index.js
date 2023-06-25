window.addEventListener("load", () => {
  let w = window.innerWidth - 200;
  let h = window.innerHeight - 300;
  const parent = document.getElementById("parent");
  let hoverArea = document.createElement("div");
  hoverArea.className = "hover-area";
  let input = document.createElement("input");
  
  input.type = "checkbox";
  reposition(hoverArea);
  hoverArea.appendChild(input);
  parent.appendChild(hoverArea);
  
  hoverArea.onmouseover = () => {reposition(hoverArea)};
  hoverArea.onclick = () => {reposition(hoverArea)};

  function reposition(elem) {
    console.log(Math.floor(Math.random(0,w)));
    elem.style.top = `${getRandomInt(w)}px`;
    elem.style.left = `${Math.max(200, getRandomInt(h))}px`;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
});