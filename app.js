let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("note-list");

function save(){
    if(noteInput.value === ""){
        alert("please input something");
        return;
    }
    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    renderNotes();
}

function renderNotes(){
    noteList.innerHTML = "";
    notes.forEach(function(note, index){
        const li = document.createElement("li");
        li.className = "bg-slate-300 rounded-md p-3 text-black flex justify-between items-center";
        const spanText = document.createElement("span");
        spanText.textContent = note;
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "bg-red-400 hover:bg-red-500 text-black px-3 py-1 rounded-md text-sm";
        delBtn.onclick = function(){
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
        li.appendChild(spanText);
        li.appendChild(delBtn);
        noteList.appendChild(li);
    });
}

renderNotes();