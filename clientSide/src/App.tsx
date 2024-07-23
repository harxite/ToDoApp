import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "./api";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    };

    getTodos();
  }, []);

  const handleAddTodo = async (text: string) => {
    const newTodo = await addTodo(text);
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = async (id: number) => {
    const updatedTodo = await toggleTodo(id);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
