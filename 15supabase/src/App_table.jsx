import { useState, useEffect } from "react";
import supabase from "./utils/supabases";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from("todos").select();

      if (todos.length > 1) {
        setTodos(todos);
      }
      console.log(todos);
    }

    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.todo} / {todo.created_at}
        </li>
      ))}
    </div>
  );
}
export default App;
