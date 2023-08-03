const ul = document.querySelector('#ToDoTask');
const input = document.getElementById('createNew');
let itemsArray = localStorage.getItem('createNew') ?
JSON.parse(localStorage.getItem('createNew')) : [];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.append(li);
}

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}




// itemsArray.forEach(addTask);
// function addTask(text){
//   const li = document.createElement('li')
//   let done= document.createElement('button')
//   done.textContent='Done'
//   done.className="done"
//   let deleteTask= document.createElement('button')
//   deleteTask.textContent= 'X'
//   deleteTask.className="delete"
//   li.textContent = text;
//   li.append(done);
//   li.append(deleteTask);
//   ul.append(li);
  
// }

// document.querySelector('#button').onclick = function add(){
//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   addTask(input.value);
//   input.value = '';
// }

// let deleteTask=document.querySelectorAll(".delete");
// for(let i=0; i<deleteTask.length; i++){
//       deleteTask[i].onclick= function del(){
//         console.log('nope')
//       //  localStorage.clear();
//       //  ul.innerHTML = '';
//       //  itemsArray = [];
//        }
//   }

  
// //}; 
// //  for(let i=0; i<deleteTask.length; i++){
// //     deleteTask[i].onclick= function del(){
// //       console.log('nope')
// //      localStorage.clear();
// //      ul.innerHTML = '';
// //      itemsArray = [];
// //      }
// // }


// if (typeof(Storage) !== "undefined") {
//    console.log('no')
//     // Code for localStorage
//     } else {
//     // No web storage Support.
//     console.log('yes')
// }