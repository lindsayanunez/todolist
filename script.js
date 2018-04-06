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
toggleComplete: function(position){
  var todo = this.todos[position];
  todo.completed = !todo.completed;

},

//toggle all
toggleAll: function(){
  //check all of them
      var totalTodos = this.todos.length;
      var completedTodos = 0;

  for(var i=0; i < totalTodos; i++){
        if(this.todos[i].completed === true){
          completedTodos++;}
        }
  if(totalTodos === completedTodos){
    for(var i=0; i<totalTodos; i++){
    this.todos[i].completed = false;}}
  else{
    for(var i=0; i<totalTodos; i++){
    this.todos[i].completed =true;}
          }
        }
      }
      },
