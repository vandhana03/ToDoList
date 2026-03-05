let todoIndex=1;
function addTodo(){


    const element=document.getElementById("todoInput")
    const todo=element.value;

    const todoDiv=document.createElement("div")
    todoDiv.setAttribute("id","todos"+todoIndex)

    const todospan=document.createElement("span")
    todospan.innerHTML=todo;

    todoDiv.append(todospan)

    const todoButton=document.createElement("button")
    todoButton.innerHTML="delete todo"

    const currentIndex=todoIndex;

    todoButton.onclick=function(){
        deleteTodo(currentIndex);
    };

    todoDiv.appendChild(todoButton)

    document.getElementById("todos").appendChild(todoDiv)
    element.value="";

    todoIndex=todoIndex+1
}

function deleteTodo(index){
    const divElement=document.getElementById("todos"+index)
    if(divElement){
        divElement.remove();
    }
}