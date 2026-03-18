const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("note-list");

function save(){
if (noteInput.value === ""){
    alert(`please input something`)
    return;

}

    const li= document.createElement("li");
  li.className ="bg-slate-300 rounded-md p-3 text-black flex justify-between items-center";

  const spanText = document.createElement("span");
spanText.textContent = noteInput.value;

const delBtn = document.createElement("button");
delBtn.textContent="Delete";
delBtn.className= "bg-red-400 hover:bg-red-500 text-black px-3 py-1 rounded-md text-sm";
delBtn.onclick = function delBtn(){
    noteList.removeChild(li);
}

li.appendChild(spanText);
li.appendChild(delBtn);
noteList.appendChild(li);

    noteInput.value="";
}
