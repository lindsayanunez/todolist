var todoList = {

//list variable
todos:[],

//display
displayTodos: function(){

},

//add
addTodo: function(todoText){
  this.todos.push(
  {
    todoText = todoText,
    completed = false
  });
},

//change
changeTodo: function(position, todoText){
  this.todos[position].todoText = todoText;
},

//delete
deleteTodo: function(position){
  this.todos.splice(position, 1);

},
//toggle complete
toggleComplete: function(){

},

//toggle all
toggleAll: function(){

},

}
