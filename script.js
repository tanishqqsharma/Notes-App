var title = document.getElementById("title");
var input = document.getElementById("note-input");
var NotesList = document.getElementById("notes-list");
var addBtn = document.getElementById("add-btn");
var Notes = document.getElementsByClassName("notes");
var body    = document.body;                     
var h1      = document.querySelector("h1");      
var newNote = document.querySelector(".new-note"); 

var Notes   = document.getElementsByClassName("notes"); 
var dlt     = document.getElementsByClassName("dlt");   

var themeBtn = document.querySelector(".theme-btn");    


var i;
for (i = 0; i < Notes.length; i++) {
    var span = document.createElement("span");
    span.innerText = "Delete";
    span.className = "dlt";
    Notes[i].appendChild(span);
}

for(i = 0; i < dlt.length; i++){
    dlt[i].onclick = function () {
        this.parentElement.style.display = "none";
    }
}


addBtn.addEventListener("click", addNote);
function addNote() {
    if (title.value != "") {
        var div = document.createElement("div");
        div.className = "notes";
        var h2 = document.createElement("h2");
        h2.innerText = title.value;
        div.appendChild(h2);
        var p = document.createElement("p");
        p.innerText = input.value;
        div.appendChild(p);
        NotesList.appendChild(div);

        var span = document.createElement("span");
        span.innerText = "Delete";
        span.className = "dlt";
        div.appendChild(span);

        for (i = 0; i < dlt.length; i++) {
            dlt[i].onclick = function () {
                this.parentElement.style.display = "none";
            }
        }
    }
    else {
        alert("Title is compulsory.");
    }
    title.value = "";
    input.value = "";


}


themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
    body.classList.toggle("dark");
    h1.classList.toggle("dark");
    newNote.classList.toggle("dark");
    title.classList.toggle("dark");
    input.classList.toggle("dark");
    addBtn.classList.toggle("dark");
    NotesList.classList.toggle("dark");
    themeBtn.classList.toggle("dark");

    for (let i = 0; i < Notes.length; i++) {
        Notes[i].classList.toggle("dark");
    }

    for (let i = 0; i < dlt.length; i++) {
        dlt[i].classList.toggle("dark");
    }
    themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light"
    : "Dark";
}
