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
async function main(){
    let todos=await getTodos()
    console.log(todos)
}
main()