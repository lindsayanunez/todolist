var todoList = {

//list variable
todos:[],

//display
displayTodos: function(){
  if(this.todos.length === 0){
    console.log('Your Todo List is empty. Add a todo!');
  }else{
      console.log('My Todos:');
    for(var i=0; i < this.todos.length; i++){
      if(this.todos[i].completed === true){
        console.log('(X)',this.todos.todoText);
      }
      else{
        console.log('()',this.todos.todoText);
      }
    }
  }

},

//add
addTodo: function(todoText){
  this.todos.push(
  {
    todoText = todoText,
    completed = false
  });
  this.displayTodos();
},

//change
changeTodo: function(position, todoText){
  this.todos[position].todoText = todoText;
  this.displayTodos();
},

//delete
deleteTodo: function(position){
  this.todos.splice(position, 1);
  this.displayTodos();

},
//toggle complete
toggleComplete: function(position){
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
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
    this.displayTodos();
      }
      },

// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// displayTodosButton.addEventListener('click', function(){
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
//   todoList.toggleAll();
// });

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
}














