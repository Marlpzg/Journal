 window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let text = document.createElement("label");
             text.innerText = task;
             text.style = "margin-right: 10px;";
             let labelCheck = document.createElement("label");
             labelCheck.innerText = "Done? ";
             labelCheck.style = "margin-left: 10px;";
             let checkbox = document.createElement("input");
             checkbox.type = "checkbox";
             labelCheck.appendChild(checkbox);
             let del = document.createElement("button");
             del.innerText = "Delete";
             del.style = "margin-left: 10px;";

             element.appendChild(text);
             element.appendChild(labelCheck);
             element.appendChild(del);

             del.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             checkbox.addEventListener("click", () => {
                if(checkbox.checked){
                    text.style = "text-decoration: line-through;";
                    element.style = "color: green;";
                }else{
                    text.style = "margin-right: 10px; text-decoration: none;";
                    element.style = "color: black;";
                }
             });

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(form.task.value, form.important.checked);

     });
 }