import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // setTodos(todo)
    // this line will update teh complete todos list -- bcoz todos is a complete list of todos 

    // therfeore we need only one todo that is need to be updasted & then call set Todos accordingly so that it updates only one of them 

    setTodos((prev) => {
      // prev -- get all teh old todos --
      // [todo , ...prev]
      // above we added a todo to all the existing array of the todos 
      [{ id: Date.now(), ...todo }, ...prev]
    })
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      prev.filter((prevTodo) => {
        prevTodo.id != id
      })
    })
  }

  const toggleComplete = (id) => {
    setTodos((prev) => {
      prev.map((prevTodo) => {
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      })
    })
  }

  // Local storage 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) 

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  } , [])

  // Whenever there is change in todods - duirng create - update - or delete - thsi hook will update teh local storage with the latest todos 
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
