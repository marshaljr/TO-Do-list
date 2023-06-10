const inputBox = document.getElementById("input-box");
const list = document.querySelector("#list");
let myArray = JSON.parse(localStorage.getItem("to-do")) || [];

myArray.map((item) => {
  const node = document.createElement("li"); // <li></li>
  node.innerHTML = item; // <li>value</li>
  list.append(node);
});
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // prevents page from reloading
  addTask();
});

function addTask() {
  let task = inputBox.value;
  if (task == "") {
    return;
  }
  const node = document.createElement("li"); // <li></li>
  // node.classList.add("abcd")
  node.innerHTML = task; // <li>value</li>
  list.append(node);
  inputBox.value = "";

  myArray.push(task);

  localStorage.setItem("to-do", JSON.stringify(myArray));
}
