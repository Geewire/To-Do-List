const ul = document.querySelector('#ToDoTask');
const input = document.getElementById('createNew');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
console.log(addTask)
function addTask(text){
  const li = document.createElement('li')
  let done= document.createElement('button')
  done.textContent='Done'
  done.className="done"
  let deleteTask= document.createElement('button')
  deleteTask.textContent= 'X'
  deleteTask.className="delete"
  li.textContent = text;
  li.append(done);
  li.append(deleteTask);
  ul.append(li);
  
}

document.querySelector('#button').onclick = function add(){
  itemsArray.push(input.value);
  console.log(itemsArray)
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

// let deleteTask=document.querySelectorAll(".delete");
// for(let i=0; i<deleteTask.length; i++){
//       deleteTask[i].onclick= function del(){
//         console.log('nope')
//         this.parentNode.remove();
//        }
//   }

  const deleteItem = (index)=>{
    let item = itemsArray[index];
    if(item != undefined){
        itemsArray.splice(index, 1);
        localStorage.itemsArray = JSON.stringify(itemsArray);
        renderList();
    }else{
        alert("Item has already been deleted.");
    }
}

  
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