document.querySelector('#button').onclick = function(){
    if(document.querySelector('#createTask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else{
    let display = document.createElement('li')
    display.innerHTML +=`
    ${document.querySelector('#createTask input').value}
    <button class="delete">x</button>
    <button class="update">Done</button>
    `

    document.getElementById('ToDoTask').append(display)
    } 

    let deleteTask = document.querySelectorAll(".delete");
        for(let i=0; i<deleteTask.length; i++){
            deleteTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    let updateTask = document.querySelectorAll(".update");
        for(let i=0; i<updateTask.length; i++){
            updateTask[i].onclick = function(){
                let addDone= this.parentNode;
                addDone.class="li"
                updateTask[i].style.backgroundColor=  'rgb(100, 156, 100)'
                document.getElementById('Done').append(addDone)
                
                // let displayDone= document.createElement('li')
                // displayDone.innerHTML +=`
                // ${document.querySelector('#createTask input').value}
                //  <button class="update">Done</button>
                //   <button class="delete">X</button>
                //  `

            //    document.getElementById('ToDoTask').append(display)
            //   }

            }
        }
    
    
}