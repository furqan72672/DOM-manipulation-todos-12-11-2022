fetch("https://bootcamp.todo.arhamsoft.org/client/todo/delete/636f51ca502c545e58496475", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(todos => todos.json())
.then(json=>console.log(json))
.catch(err=>console.log(err))
.catch(err=>console.log(err))