const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTasck(){
    if(inputBox.value =='')
        alert("Please write your task!");
    else{
        // creating li
        let li = document.createElement("li");
        // giving value
        li.innerHTML = inputBox.value;
        // display li
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save data localy || listContainer.innerHTML --> the data || we can display the data by using getItem data (it is saved in the browser)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// to display the data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();