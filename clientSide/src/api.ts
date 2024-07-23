const API_URL = "http://localhost:5000/todos";

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addTodo = async (text: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return response.json();
};

export const toggleTodo = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
  });
  return response.json();
};

export const deleteTodo = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
