let taskInp = document.querySelector(".task-input");

let dateInp = document.querySelector(".date-input");

let addtaskbtn = document.querySelector(".add-btn");

let task =document.querySelector(".task");

addtaskbtn.addEventListener("click",AddTask);

function AddTask() {
let innertask="";
// add item

let taskList = document.createElement("ul");
innertask +=`
  <p>${dateInp.value}</p>
  <p>${taskInp.value}</p>
  <ion-icon name="trash"></ion-icon>
`;

taskList.innerHTML=innertask;

task.appendChild(taskList);
taskInp.value = "";

// remove item
taskList.querySelector("ion-icon").addEventListener("click",removeChild);

function removeChild() {
  taskList.remove();
}


}





























// let innertask = "";

// function AddTask() {
//  innertask += `
//  <div class="task-list">
//  <div class="task-name">${taskInp.value}</div>
//  <button class="delete-btn"><ion-icon name="trash"></ion-icon></button>
//  </div>
//  `;


//   task.innerHTML=innertask;
//   taskInp.value ="";

//   let tasklist =document.querySelector(".task-list");
//   let currentTask = document.querySelectorAll
//   (".delete-btn");
//   for(i=0; i<currentTask.length ;i++) {
//     currentTask[i].addEventListener("click",function() {
//     this.parentNode.remove();
    

//     });
//   }
  


// }




  


  

  
 



