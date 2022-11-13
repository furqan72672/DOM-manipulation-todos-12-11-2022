function getTodos(){
    return new Promise((resolve,reject)=>{
        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=27125", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(todos => todos.json())
        .then(json=>resolve(json))
        .catch(err=>reject(err))
        .catch(err=>reject(err))
    })
    .then(res=>res.todos)
    .catch(err=>err)
}
function createTodo(){
    return new Promise((resolve,reject)=>{
        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/create", {
            method: "POST",
            body: JSON.stringify({
                userId: 27125,
                title: "todo8",
                desc:"this is eighth todo."
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(todos => todos.json())
        .then(json=>resolve(json))
        .catch(err=>reject(err))
        .catch(err=>reject(err))
    })
    .then(res=>console.log(res.todo))
    .catch(err=>console.log(err))
}
function deleteTodo(id){
    // let _id=id.toString()
    return new Promise((resolve,reject)=>{
        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/delete/"+id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(todos => todos.json())
        .then(json=>{
            console.log(json)
            document.getElementById(id).style.display='none'
            // let row=document.getElementById(id)
            // row.parentNode.removeChild(row)
        })
        .catch(err=>console.log(err))
        .catch(err=>console.log(err))
    })
    .then(res=>console.log(res.todo))
    .catch(err=>console.log(err))   
}
function displayTodos(todos){
    let html='<table><tr><th>ID</th><th>Title</th><th>Description</th><th>Actions</th></tr>'
    todos.forEach(element => {
        html+=`<tr id='${element._id}'><td>${element._id}</td>`
        html+=`<td>${element.title}</td>`
        html+=`<td>${element.desc}</td>`
        html+=`<td><input type="button" value="delete" onclick="deleteTodo('${element._id}')"></td></tr>`
    });
    html+='</table>'
    document.getElementById("list").innerHTML=html
}
async function main(){
    let todos=await getTodos()
    displayTodos(todos)
}

main()