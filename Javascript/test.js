let todoList = [];
function remember(task) {
  return todoList.push(task);
}
function getTask(){
  return todoList.shift();
}
function rememberUrgently(task){
  return todoList.unshift(task);
}

remember("groceries")
// console.log(todoList)

console.log(getTask())
console.log(rememberUrgently())
