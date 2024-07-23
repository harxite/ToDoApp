import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo: Todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.json({ message: "Todo deleted" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
