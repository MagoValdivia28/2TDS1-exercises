// // class TaskList {
// //     constructor(doing) {
// //         this.doing = doing;
// //         this.task = [];
// //     }
// //     addTask(){
// //         this.task.push(list);
// //         console.log(task);
// //     }
// // }

// // function addTaskList() {
// //     const task = document.getElementById("inputadd").value
// //     const list = new TaskList(task);
// //     console.log(list)

// //     document.getElementById("result").classList.remove("hidden")

// //     document.getElementById('result').innerHTML +=
// //         `<div id="results"><div id = "div1"><p id="list1">${list.doing}</p><button id="bt1" onclick = "buttonclick()"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button></div></div>`
// // }





// // class task{
// //     constructor(status, id, title){
// //         this.status = status;
// //         this.id = id;
// //         this.title = title;
// //     }
// // }
// // class TaskList{
// //     constructor(){
// //         this.tasks = [];
// //     }
// //     addTasks(param){
// //         this.tasks.push(param);
// //     }
// // }
// // const veryBigList = new TaskList();

// // function creatTask(){
// //     const taskTitle = document.getElementById("newTask").value

// //     const task = new Task (1, taskTitle, false);
    
// //     veryBigList.addTasks(task);
// // } 
// // function renderTask(){
// //     let element = '';
// //     veryBigList.tasks.forEach((task) =>{
// //         element +=
// //         `<li id="${task.id}>"
// //         <span id= "${task.id}-title">${task.title}</span>
// //             <div>
// //                 <button id="${task.id}-title" class="action"
// //                    onclick="doneTask(${task.id})"><i class="fa-solid fa-check"></i>
// //                 </button>
// //                 <button class="action edit" onclick="editTask(${task.id})"><i class="fa-solid fa-pencil"></i></button>
// //                 <button class="action remove" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
// //             </div>    
// //         </li>
// //         `
// //     })
    
// // }
    
// // document.getElementById("list").innerHTML = element

// // function deleteTask(id){
// //     veryBigList.removeTask(id);
// //     renderTask();
// // }


// class Task {
//     constructor(id, title, status) {
//         this.id = id;
//         this.title = title;
//         this.status = status;
//     }
// }

// class TaskList {
//     constructor() {
//         this.tasks = [];
//     }


//     addTask(param) {
//         this.tasks.push(param);
//     }

//     removeTask(id) {
//         this.tasks = this.tasks.filter((task) => task.id !== id);
//     }

//     markTask(id) {
//         this.tasks.forEach(task => {
//             if (task.id == id) {
//                 task.status = !task.status;
//             }
//         });
//         document.getElementById(id + "-button").classList.toggle("taskDone");
//     }
// }

// const veryBigList = new TaskList();

// function createTask() {
//     const taskTitle = document.getElementById("inp").value;

//     const task = new Task(generateId(), taskTitle, false);

//     veryBigList.addTask(task);

//     console.log(veryBigList);
//     renderTasks();
// }

// function generateId() {
//     return Math.floor(Math.random() * 9999);
// }

// function renderTasks() {
//     let element = "";

//     veryBigList.tasks.forEach(task => {
//         element += ` <li id="${task.id}">
//         <span id="${task.id}--title">${task.title}</span>
//         <div>
//         <button id="${task.id}--button" class="action"
//             onclick="doneTask(${task.id})"><i class="fa-solid fa-check" style="color: #000000;"></i></i>
//             </button>
//             <button class="action edit" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>
//             </div>
//             </li>`
//     });

//     document.getElementById("result").innerHTML = element;
// }

// function deleteTask(id) {
//     veryBigList.removeTask(id);
//     renderTasks();
// }

// function doneTask(id) {
//     veryBigList.markTask(id);
// }




