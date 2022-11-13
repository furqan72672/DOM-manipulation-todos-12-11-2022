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
async function main(){
    let newTodo=await createTodo()
    // console.log(newTodo)
}
main()