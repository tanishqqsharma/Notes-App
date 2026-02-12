var title = document.getElementById("title");
var input = document.getElementById("note-input");
var NotesList = document.getElementById("notes-list");
var addBtn = document.getElementById("add-btn");
var Notes = document.getElementsByClassName("notes");
var dlt = document.getElementsByClassName("dlt");

var i;
for (i = 0; i < Notes.length; i++) {
    var span = document.createElement("span");
    span.innerText = "Delete";
    span.classList = "dlt";
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
        div.classList = "notes";
        var h2 = document.createElement("h2");
        h2.innerText = title.value;
        div.appendChild(h2);
        var p = document.createElement("p");
        p.innerText = input.value;
        div.appendChild(p);
        NotesList.appendChild(div);

        var span = document.createElement("span");
        span.innerText = "Delete";
        span.classList = "dlt";
        div.appendChild(span);

        for (i = 0; i < dlt.length; i++) {
            dlt[i].onclick = function () {
                this.parentElement.style.display = "none";
            }
        }
    }
    else {
        prompt("Title is compulsory.");
    }
    title.value = "";
    input.value = "";


}