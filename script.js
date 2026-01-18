let txtMessage = document.querySelector("#noteInput");
let divMessages = document.querySelector("#notesList");
let btnAdd = document.querySelector("#addBtn");
btnAdd.addEventListener("click", () => {
  let note = txtMessage.value.trim();
  
  if (note === "") return; 
let arr = [];
  if (localStorage.getItem("mynotes") != null) {
    arr = JSON.parse(localStorage.getItem("mynotes"));
  }
  arr.push(note);
  localStorage.setItem("mynotes", JSON.stringify(arr));
txtMessage.value = ""; 
  disp();
});
function Delete(note) {
  let arr = JSON.parse(localStorage.getItem("mynotes")) || [];
  let ind = arr.indexOf(note);
  if (ind > -1) {
    arr.splice(ind, 1);
    localStorage.setItem("mynotes", JSON.stringify(arr));
  }
  disp();
}
function disp() {
  divMessages.innerHTML = ""; // clear list first
  if (localStorage.getItem("mynotes") != null) {
    let arr = JSON.parse(localStorage.getItem("mynotes"));
    arr.forEach(note => {
      let li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = note;

      let btn = document.createElement("button");
      btn.textContent = "X";
      btn.className = "btn btn-danger btn-sm";
      btn.onclick = () => Delete(note);

      li.appendChild(btn);
      divMessages.appendChild(li);
    });
  }
}
disp();
