const ul = document.querySelector('#ToDoTask');
const ulDone= document.querySelector('#Done')
const input = document.getElementById('createNew');
const inputDone =  document.getElementById('Done');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  let done= document.createElement('button')
  done.textContent='Done'
  done.className="done"
  let deleteTask= document.createElement('button')
  deleteTask.textContent= 'Delete'
  deleteTask.className="delete"
  li.textContent = text;
  li.append(deleteTask);
  li.append(done);
  ul.append(li);
  
}

document.querySelector('#button').onclick = function add(){
  itemsArray.push(input.value);
  console.log(itemsArray)
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

let deleteTask=document.querySelectorAll(".delete");
for(let i=0; i<deleteTask.length; i++){
      deleteTask[i].onclick= function del(ind){
        this.parentNode.remove();
        let todo = localStorage.getItem("items");
        todoArray = JSON.parse(todo);
        todoArray.splice(ind, 1);
       localStorage.setItem("items", JSON.stringify(todoArray));
       addTask(text);
       }
  }

  let doneTask=document.querySelectorAll(".done");
  for(let i=0; i<doneTask.length; i++){
        doneTask[i].onclick= function doneTaskF(ind){
          console.log('yes')
          let addDone= this.parentNode;
          addDone.class="li"
          doneTask[i].style.backgroundColor=  'rgb(100, 156, 100)'
          document.getElementById('Done').append(addDone)
          let todo = localStorage.getItem("items");
          todoArray = itemsArray;
           todoArray.splice(ind, 1);
           localStorage.setItem("items", JSON.stringify(todoArray));
           addTask(text);
            
        }  
    }


  // function deleteTodo(ind) {
  //   let todo = localStorage.getItem("items");
  //   todoArray = JSON.parse(todo);
  //   todoArray.splice(ind, 1);
  //   localStorage.setItem("items", JSON.stringify(todoArray));
  //   displayTodo();
  //  }
  
//}; 
//  for(let i=0; i<deleteTask.length; i++){
//     deleteTask[i].onclick= function del(){
//       console.log('nope')
//      localStorage.clear();
//      ul.innerHTML = '';
//      itemsArray = [];
//      }
// }


if (typeof(Storage) !== "undefined") {
   console.log('no')
    // Code for localStorage
    } else {
    // No web storage Support.
    console.log('yes')
}